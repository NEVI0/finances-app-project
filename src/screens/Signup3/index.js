import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { Button, NavActionButton, Input } from '../../components';

import { styles } from './styles';

export const Signup3 = ({ navigation, route }) => {
    console.log(route.params)

    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSignup = () => {
        if (password !== confPassword) {
            return Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: 'As senhas não são iguais!'
            });
        }
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
                    Passo 3 de 3
                </Text>
            </View>

            <Text style={styles.text}>
                Por fim, crie a sua melhor senha para a sua conta
            </Text>

            <View style={{ ...styles.section, flex: 1 }}>
                <Input
                    label="Senha"
                    icon={isPasswordVisible ? 'lock-open' : 'lock'}
                    isPassword={!isPasswordVisible}
                    onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <Input
                    label="Confirme a senha"
                    icon={isPasswordVisible ? 'lock-open' : 'lock'}
                    isPassword={!isPasswordVisible}
                    value={confPassword}
                    onChangeText={text => setConfPassword(text)}
                />
            </View>

            <Button
                text="Criar minha conta"
                icon="plus"
                onPress={handleSignup}
            />
        </View>
    );
}