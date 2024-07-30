import { collection, where, getDocs, addDoc, query, limit } from 'firebase/firestore';
import { firebaseDatabase } from '../../../firebaseConfig';

const COLLEACTION_NAME = 'expenses';

export const fetchExpensesService = async (userAuthUid, search, amount) => {
    const collec = collection(firebaseDatabase, COLLEACTION_NAME);

    const condition = where('authUid', '==', userAuthUid);
    const lt = limit(amount || 10000);
    const qr = query(collec, condition, lt);

    const querySnapshot = await getDocs(qr);

    const data = [];
    querySnapshot.forEach(doc => {
        const formattedData = doc.data();
        
        if (!!search) {
            const found = String(formattedData.title).toLowerCase().includes(search.toLowerCase());
            if (found) data.push(formattedData);
        } else {
            data.push(formattedData);
        }
    });

    return data;
}

export const createExpenseService = async (data) => {
    return await addDoc(collection(firebaseDatabase, COLLEACTION_NAME), data);
}