import { collection, addDoc } from 'firebase/firestore'; 
import { firebaseDatabase } from '../../../firebaseConfig';

const COLLEACTION_NAME = 'users';

export const createUserService = async (
    name,
    userAuthUid,
    salaray,
    expenses,
    isInvester,
    investments,
    investerProfile,
) => {
    return await addDoc(
        collection(firebaseDatabase, COLLEACTION_NAME),
        {
            name,
            userAuthUid,
            salaray,
            expenses,
            isInvester,
            investments,
            investerProfile,
        }
    );
}