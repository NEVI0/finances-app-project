import { Text, TouchableOpacity, View } from 'react-native';

import { Icon, NavActionButton } from '../../../components';

import { theme } from '../../../theme';
import { styles } from './styles';

export const DrawerMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <TouchableOpacity style={styles.profile} activeOpacity={1}>
                    <View style={styles.image}>
                        <Icon name="user" color={theme.colors.primary} />
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