import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerMenu } from './DrawerMenu';

import { Home } from '../../screens/Home';

const Drawer = createDrawerNavigator();

export const AppRouter = () => (
    <Drawer.Navigator
        drawerContent={props => <DrawerMenu {...props} />}
        screenOptions={{ headerShown: false }}
    >
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
);