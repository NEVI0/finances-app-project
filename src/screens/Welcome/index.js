import { Text, View } from 'react-native';

import { Button } from '../../components';

import { styles } from './styles';

export const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Seja bem-vindo(a) ao <Text style={styles.strong}>Finance</Text>!
                </Text>

                <View style={styles.welcome}>
                    <Text style={styles.text}>
                        Aplicativo de finanças pessoais feito sobe medida para você. Venha conosco nessa jornada de forma gratuita.
                    </Text>

                    <Text style={styles.text}>
                        Vamos começar?
                    </Text>
                </View>

                <Button
                    text="Acessar/criar minha conta"
                    icon="user"
                    onPress={() => navigation.navigate('Signin')}
                />

                <Text style={styles.version}>
                    Versão: 1.0.0
                </Text>
            </View>
        </View>
    );
}