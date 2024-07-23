import { useState } from 'react';
import { StatusBar, Text, View, ScrollView } from 'react-native';

import { Button, NavActionButton, Input, CheckBox, Select } from '../../components';

import { styles } from './styles';

export const Signup2 = ({ navigation, route }) => {
    const [salary, setSalary] = useState('');
    const [expenses, setExpenses] = useState('');

    const [isInvester, setIsInvester] = useState(false);

    const [investments, setInvestments] = useState('');
    const [investerProfile, setInvesterProfile] = useState(null);

    return <>
        <ScrollView style={styles.container}>
            <StatusBar animated={true} translucent={true} barStyle="light-content"  />

            <View style={styles.header}>
                <NavActionButton
                    icon="arrow-left"
                    text="Voltar"
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.subheader}>
                <Text style={styles.title}>
                    Criar minha conta
                </Text>

                <Text style={styles.subtitle}>
                    Passo 2 de 3
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>
                    Agora, precisamos saber sobre sua vida financeira.
                </Text>

                <Text style={styles.text}>
                    É importante sabermos disso para construirmos as analises, tente trazer valores aproximados da realidade.
                </Text>

                <Text style={styles.warning}>
                    Não é necessário preencher estes dados agora!
                </Text>
            </View>

            <View style={styles.form}>
                <Input
                    label="Salário mensal"
                    sublabel="(opcional)"
                    type={{ keyboard: 'numeric' }}
                    icon="dollar"
                    value={salary}
                    onChangeText={text => setSalary(text)}
                />

                <Input
                    label="Despesas mensais"
                    sublabel="(opcional)"
                    type={{ keyboard: 'numeric' }}
                    icon="dollar"
                    value={expenses}
                    onChangeText={text => setExpenses(text)}
                />

                <CheckBox
                    checked={isInvester}
                    label="É investidor na bolsa de valores?"
                    onToggle={() => setIsInvester(!isInvester)}
                />

                {
                    isInvester && <>
                        <Input
                            label="Quanto você investe mensalmente"
                            sublabel="(opcional)"
                            type={{ keyboard: 'numeric' }}
                            icon="dollar"
                            value={investments}
                            onChangeText={text => setInvestments(text)}
                        />

                        <Select
                            label="Qual seu perfil como investidor?"
                            sublabel="(opcional)"
                            selectedValue={investerProfile}
                            onSelect={option => setInvesterProfile(option)}
                            options={[
                                { label: 'Conservador', value: 'Conservador' },
                                { label: 'Moderado', value: 'Moderado' },
                                { label: 'Arrojado', value: 'Arrojado' },
                            ]}
                        />
                    </>
                }
            </View>
        </ScrollView>

        <View style={styles.footer}>
            <Button
                type="secondary"
                text="Próximo"
                icon="arrow-right"
                onPress={() => {
                    navigation.navigate('Signup3', { 
                        ...route.params,
                        salary,
                        expenses,
                        isInvester,
                        investments,
                        investerProfile, 
                    });
                }}
            />
        </View>
    </>;
}