import { StatusBar, Text, View } from 'react-native';

import { NavActionButton, IconButton, Button, Icon } from '../../components';

import { formatCurrency } from '../../helpers/formatCurrency';

import { theme } from '../../theme';
import { styles } from './styles';

export const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar animated translucent barStyle="light-content" />

            <View style={styles.header}>
                <NavActionButton
                    icon="menu"
                    text="Menu"
                    onPress={navigation.toggleDrawer}
                />

                <IconButton
                    icon="log-out"
                    color={theme.colors.others.error}
                    onPress={() => console.log('new')}
                />
            </View>

            <View style={[styles.profile, styles.section]}>
                <View style={styles.image}>
                    <Icon name="user" color={theme.colors.primary} />
                </View>

                <View>
                    <Text style={styles.name}>
                        Nome do usuário
                    </Text>

                    <Text style={styles.email}>
                        email_do_user@gmail.com
                    </Text>
                </View>
            </View>

            <View style={{...styles.section, flex: 1}}>
                <Text style={styles.subtitle}>
                    Meus dados
                </Text>

                <View style={styles.subsection}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Salário mensal
                        </Text>

                        <Text style={styles.textMedium}>
                            {formatCurrency(2000)}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Despesas mensais
                        </Text>

                        <Text style={styles.textMedium}>
                            {formatCurrency(3000)}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Investimentos mensais
                        </Text>

                        <Text style={styles.textMedium}>
                            {formatCurrency(1000)}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Perfil de investidor
                        </Text>

                        <Text style={styles.textGreen}>
                            Casca grossa
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Button
                    type='secondary'
                    text="Excluir conta"
                    icon="trash"
                    iconColor={theme.colors.others.error}
                    onPress={() => console.log('Delete')}
                />

                <Button
                    text="Editar meus dados"
                    icon="edit"
                    onPress={() => navigation.navigate('EditProfile')}
                />
            </View>
        </View>
    );
}