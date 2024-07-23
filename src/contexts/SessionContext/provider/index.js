import { useState } from 'react';
import { SessionContext } from '../hooks/useSession';

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <SessionContext.Provider value={{ user }}>
            {children}
        </SessionContext.Provider>
    );
}