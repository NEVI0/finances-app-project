import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';

import { Button, NavActionButton, Input } from '../../components';

import { styles } from './styles';

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar animated={true} translucent={true} barStyle="light-content"  />

            <View style={styles.header}>
                <NavActionButton
                    icon="arrow-left"
                    text="Voltar"
                    onPress={() => console.log('Voltar')}
                />
            </View>

            <Text style={styles.title}>
                Acessar minha conta
            </Text>

            <View style={{ ...styles.section, flex: 1 }}>
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

                <Input
                    label="Senha"
                    icon={isPasswordVisible ? 'lock-open' : 'lock'}
                    isPassword={!isPasswordVisible}
                    onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <View style={styles.section}>
                <Button
                    text="Entrar"
                    icon="log-in"
                    onPress={() => console.log('Log In')}
                />

                <View style={styles.row}>
                    <View style={styles.line} />
                    <Text style={styles.or}>OU</Text>
                    <View style={styles.line} />
                </View>

                <Button
                    type="secondary"
                    text="Criar minha conta"
                    icon="plus"
                    onPress={() => console.log('Navigate')}
                />
            </View>
        </View>
    );
}