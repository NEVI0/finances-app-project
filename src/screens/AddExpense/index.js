import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';

import { Button, NavActionButton, Input, Select } from '../../components';

import { styles } from './styles';

export const AddExpense = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(null);

    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

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

            <Text style={styles.title}>
                Adicionar nova saída
            </Text>

            <View style={{ ...styles.section, flex: 1 }}>
                <Input
                    label="Título"
                    icon="edit"
                    value={title}
                    onChangeText={setTitle}
                />

                <Select
                    label="Categoria"
                    selectedValue={category}
                    onSelect={option => setCategory(option)}
                    options={
                        new Array(10).fill(0).map((_, index) => ({
                            value: index, label: 'Item ' + index
                        }))
                    }
                />

                <Input
                    label="Valor de saída"
                    icon="dollar"
                    value={value}
                    onChangeText={setValue}
                />

                <Input
                    label="Data da saída"
                    placeholder="00/00/0000"
                    icon="calendar"
                    value={date}
                    onChangeText={setDate}
                />
            </View>

            <Button
                text="Adicionar"
                icon="plus"
                onPress={() => console.log('Log In')}
            />
        </View>
    );
}