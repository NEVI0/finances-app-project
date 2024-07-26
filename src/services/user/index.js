import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'; 
import { firebaseDatabase } from '../../../firebaseConfig';

const COLLEACTION_NAME = 'users';

export const fetchUserDataService = async (authUid) => {
    const collec = collection(firebaseDatabase, COLLEACTION_NAME);

    const condition = where('authUid', '==', authUid);
    const qr = query(collec, condition);

    const querySnapshot = await getDocs(qr);

    let data = null;

    querySnapshot.forEach(doc => {
        const formattedData = doc.data();
        if (formattedData.authUid === authUid) data = formattedData;
    });
    
    return data;
}

export const createUserService = async (data) => {
    return await addDoc(collection(firebaseDatabase, COLLEACTION_NAME), data);
}