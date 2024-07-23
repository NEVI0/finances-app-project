import { AppRouter } from './app';
import { AuthenticationRouter } from './authentication';

import { useSession } from '../contexts';

export const Router = () => {
    const { user } = useSession();

    return !user ? <AuthenticationRouter /> : <AppRouter />;
}