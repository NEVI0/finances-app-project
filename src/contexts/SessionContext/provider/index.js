import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { createUserService, fetchUserDataService } from '../../../services/user';
import { signupUserService, signinUserService } from '../../../services/auth';

import { SessionContext } from '../hooks/useSession';

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signin = async (data) => {
        try {
            const { email, password } = data;

            const authData = await signinUserService(email, password);
            const userData = await fetchUserDataService(authData.uid);
            
            delete userData.password;
            const toSaveData = { ...authData, ...userData, authUid: authData.uid };

            await AsyncStorage.setItem('user', JSON.stringify(toSaveData));
            setUser(toSaveData);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            });
        }
    }

    const signup = async (data) => {
        try {
            const { email, password } = data;
            const user = await signupUserService(email, password);
            
            delete data.password;
            const toSaveData = { ...data, authUid: user.uid };

            await createUserService(toSaveData);
            await AsyncStorage.setItem('user', JSON.stringify(toSaveData));

            setUser(toSaveData);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            });
        }
    }

    const signout = async () => {
        await AsyncStorage.removeItem('user')
        setUser(null);
    }

    return (
        <SessionContext.Provider value={{ user, signin, signup, signout }}>
            {children}
        </SessionContext.Provider>
    );
}