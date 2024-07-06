import { Text, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import { NavActionButton } from '../../../components';

import { styles } from './styles';
import { theme } from '../../../theme';

export const DrawerMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Menu
                </Text>

                <View style={styles.nav}>
                    <NavActionButton
                        icon="home"
                        text="Início"
                        onPress={() => navigation.navigate('Home')}
                    />

                    <NavActionButton
                        icon="trending-up"
                        text="Entradas"
                        onPress={() => null}
                    />

                    <NavActionButton
                        icon="trending-down"
                        text="Saídas"
                        onPress={() => null}
                    />

                    <NavActionButton
                        icon="tag"
                        text="Categorias"
                        onPress={() => null}
                    />
                </View>
            </View>

            <NavActionButton
                icon="log-out"
                text="Sair"
                color={theme.colors.others.error}
                onPress={() => null}
            />
        </View>
    );
}