import { ScrollView, StatusBar, Text, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';
import { Button, CheckBox, Input, NavActionButton, Select } from '../../components';

export const EditProfile = ({ navigation }) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [salario, setSalario] = useState('')
    const [despesas, setDespesas] = useState('')
    const [ehInvestidor, setEhInvestidor] = useState(false)
    const [investimentoMensal, setInvestismentoMensal] = useState('')
    const [perfil, setPerfil] = useState(null)

    return (
        <>
            <ScrollView style={styles.container}>
                <StatusBar animated={true} translucent={true} barStyle="light-content" />

                <View style={styles.header}>
                    <NavActionButton
                        icon="arrow-left"
                        text="Voltar"
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <View style={styles.subheader}>
                    <Text style={styles.title}>
                        Editar meus dados
                    </Text>

                    <Text style={styles.subtitle}>
                        Minha conta
                    </Text>
                </View>

                <View style={styles.form}>
                    <Input
                        label="Seu nome completo"
                        icon="user"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <Input
                        label="E-mail"
                        placeholder='exemplo@gmail.com'
                        icon="mail"
                        value={email}
                        type={{
                            keyboard: 'email-address',
                            value: 'emailAddress'
                        }}
                        onChangeText={setEmail}
                    />
                    <Input
                        label="Salário mensal"
                        icon="dollar"
                        value={salario}
                        onChangeText={setSalario}
                    />
                    <Input
                        label="Despesas mensais"
                        icon="dollar"
                        value={despesas}
                        onChangeText={setDespesas}
                    />

                    <CheckBox
                        checked={ehInvestidor}
                        label="É investidor na bolsa de valores?"
                        onToggle={() => setEhInvestidor(!ehInvestidor)}
                    />
                    {ehInvestidor && <>
                        <Input
                            label="Quanto você investe mensalmente?"
                            icon="dollar"
                            value={investimentoMensal}
                            onChangeText={setInvestismentoMensal}
                        />
                        <Select
                            label="Qual seu perfil como investidor?"
                            selectedValue={perfil}
                            onSelect={option => setPerfil(option)}
                            options={
                                [
                                    { value: 'iniciante', label: 'Iniciante' },
                                    { value: 'moderado', label: 'Moderado' },
                                    { value: 'experiente', label: 'Experiente' },
                                ]
                            }
                        />
                    </> }

                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    text={'Editar meus dados'}
                    icon={'edit'}
                    onPress={() => { console.log('ok') }}
                />
            </View>
        </>
    );
}