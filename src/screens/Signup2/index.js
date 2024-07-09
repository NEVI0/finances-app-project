import { useState } from 'react';
import { StatusBar, Text, View, ScrollView } from 'react-native';

import { Button, NavActionButton, Input, CheckBox, Select } from '../../components';

import { styles } from './styles';

export const Signup2 = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [salary, setSalary] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const [isInvester, setIsInvester] = useState(false);

    const [investments, setInvestments] = useState(0);
    const [investerProfile, setInvesterProfile] = useState(0);

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
                    icon="dollar"
                    value={String(salary)}
                    onChangeText={text => setSalary(Number(text))}
                />

                <Input
                    label="Despesas mensais"
                    sublabel="(opcional)"
                    icon="dollar"
                    value={String(expenses)}
                    onChangeText={text => setExpenses(Number(text))}
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
                            icon="dollar"
                            value={String(investments)}
                            onChangeText={text => setInvestments(Number(text))}
                        />

                        <Select
                            label="Qual seu perfil como investidor?"
                            sublabel="(opcional)"
                            value={investerProfile}
                            options={[
                                { value: 'um', label: 'Um' },
                                { value: 'dois', label: 'Dois' },
                                { value: 'tres', label: 'Três' },
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
                onPress={() => navigation.navigate('Signup3')}
            />
        </View>
    </>;
}