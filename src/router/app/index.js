import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../../screens/Home';

const Drawer = createDrawerNavigator();

export const AppRouter = () => (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
);