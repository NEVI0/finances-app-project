import { useContext, createContext } from 'react';

export const SessionContext = createContext({});

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) throw Error('Cound not initialize "SessionContext"!');

    return context;
}