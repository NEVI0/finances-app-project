import { createStackNavigator } from '@react-navigation/stack';

import { Signin } from '../../screens/Signin';

const Stack = createStackNavigator();

export const AuthenticationRouter = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
);