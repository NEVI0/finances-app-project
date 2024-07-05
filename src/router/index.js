import { AppRouter } from './app';
import { AuthenticationRouter } from './authentication';

export const Router = () => {
    return true ? <AuthenticationRouter /> : <AppRouter />;
}