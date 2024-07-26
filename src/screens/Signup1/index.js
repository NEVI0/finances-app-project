import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { Button, NavActionButton, Input } from '../../components';

import { REGEXES } from '../../constants/regexes';

import { styles } from './styles';

export const Signup1 = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNextStep = () => {
        if (!name.length) {
            return Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: 'Você precisa informar seu nome!'
            });
        }

        const isNameInvalid = REGEXES.NAME.test(name);
        if (isNameInvalid) {
            return Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: 'Informe um nome válido!'
            });
        }

        if (!email.length) {
            return Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: 'Você precisa informar um e-mail!'
            });
        }

        const isEmailInvalid = !REGEXES.EMAIL.test(email);
        if (isEmailInvalid) {
            return Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: 'Informe um e-mail válido!'
            });
        }

        navigation.navigate('Signup2', { email, name });
    }

    return (
        <View style={styles.container}>
            <StatusBar animated={true} translucent={true} barStyle="light-content"  />

            <View style={styles.header}>
                <NavActionButton
                    icon="arrow-left"
                    text="Voltar"
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View>
                <Text style={styles.title}>
                    Criar minha conta
                </Text>

                <Text style={styles.subtitle}>
                    Passo 1 de 3
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>
                    Para começarmos, precisamos saber algumas informações básicas sobre você.
                </Text>

                <Text style={styles.text}>
                    Preencha os campos abaixo.
                </Text>
            </View>

            <View style={{ ...styles.section, flex: 1 }}>
                <Input
                    label="Seu nome completo"
                    icon="user"
                    value={name}
                    onChangeText={text => setName(text)}
                />

                <Input
                    label="E-mail"
                    placeholder="exemplo@gmail.com"
                    icon="mail"
                    type={{
                        keyboard: 'email-address',
                        value: 'emailAddress'
                    }}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <Button
                type="secondary"
                text="Próximo"
                icon="arrow-right"
                onPress={handleNextStep}
            />
        </View>
    );
}