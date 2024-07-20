import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerMenu } from './DrawerMenu';

import {
    Home,
    AddEntry,
    AddExpense,
    Categories,
    EditProfile,
    Entries,
    Expenses,
    Profile
} from '../../screens';

const Drawer = createDrawerNavigator();

export const AppRouter = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        drawerContent={props => <DrawerMenu {...props} />}
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="AddEntry" component={AddEntry} />
        <Drawer.Screen name="AddExpense" component={AddExpense} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="Entries" component={Entries} />
        <Drawer.Screen name="Expenses" component={Expenses} />
        <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
);