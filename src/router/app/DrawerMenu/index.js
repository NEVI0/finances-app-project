import { Text, TouchableOpacity, View } from 'react-native';

import { Icon, NavActionButton } from '../../../components';

import { theme } from '../../../theme';
import { styles } from './styles';

export const DrawerMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.profile}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <View style={styles.image}>
                        <Icon name="user" size={20} color={theme.colors.primary} />
                    </View>

                    <View>
                        <Text style={styles.name}>
                            Névio Magagnin
                        </Text>

                        <Text style={styles.email}>
                            nevio.dev@gmail.com
                        </Text>
                    </View>
                </TouchableOpacity>

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
                        onPress={() => navigation.navigate('Entries')}
                    />

                    <NavActionButton
                        icon="trending-down"
                        text="Saídas"
                        onPress={() => navigation.navigate('Expenses')}
                    />

                    <NavActionButton
                        icon="tag"
                        text="Categorias"
                        onPress={() => navigation.navigate('Categories')}
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