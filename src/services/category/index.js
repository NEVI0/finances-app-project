import { collection, where, getDocs, addDoc, query } from 'firebase/firestore';
import { firebaseDatabase } from '../../../firebaseConfig';

const COLLEACTION_NAME = 'categories';

export const fetchCategoriesService = async (userAuthUid, search) => {
    const collec = collection(firebaseDatabase, COLLEACTION_NAME);

    const condition = where('authUid', '==', userAuthUid);
    const qr = query(collec, condition);

    const querySnapshot = await getDocs(qr);

    const data = [];

    querySnapshot.forEach(doc => {
        const formattedData = doc.data();
        
        if (!!search) {
            const found = String(formattedData.name).toLowerCase().includes(search.toLowerCase());
            if (found) data.push(formattedData);
        } else {
            data.push(formattedData);
        }
    });

    return data;
}

export const createCategoryService = async (data) => {
    return await addDoc(collection(firebaseDatabase, COLLEACTION_NAME), data);
}