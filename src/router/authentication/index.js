import { createStackNavigator } from '@react-navigation/stack';

import {
    Signin,
    Signup1,
    Signup2,
    Signup3,
    Welcome
} from '../../screens';

const Stack = createStackNavigator();

export const AuthenticationRouter = () => (
    <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup1" component={Signup1} />
        <Stack.Screen name="Signup2" component={Signup2} />
        <Stack.Screen name="Signup3" component={Signup3} />
    </Stack.Navigator>
);