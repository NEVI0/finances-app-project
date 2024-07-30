import { useEffect, useMemo, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { Button, NavActionButton, Input, Select } from '../../components';

import { createEntryService } from '../../services/entry';
import { fetchCategoriesService } from '../../services/category';
import { useSession } from '../../contexts';

import { styles } from './styles';

export const AddEntry = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(null);

    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    const [categories, setCategories] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const { user } = useSession();

    const handleFetchCategories = async () => {
        try {
            setIsLoadingCategories(true);

            const data = await fetchCategoriesService(user.authUid);
            setCategories(data);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            });
        } finally {
            setIsLoadingCategories(false);
        }
    }

    const handleAddEntry = async () => {
        try {
            if (!title) {
                return Toast.show({
                    type: 'error',
                    text1: 'Alerta!',
                    text2: 'Você precisa informar o título!',
                });
            }
            if (!category) {
                return Toast.show({
                    type: 'error',
                    text1: 'Alerta!',
                    text2: 'Você precisa informar a categoria!',
                });
            }
            if (!value) {
                return Toast.show({
                    type: 'error',
                    text1: 'Alerta!',
                    text2: 'Você precisa informar o valor!',
                });
            }
            if (!date) {
                return Toast.show({
                    type: 'error',
                    text1: 'Alerta!',
                    text2: 'Você precisa informar a data!',
                });
            }

            setIsLoading(true);

            await createEntryService({
                authUid: user.authUid,
                title,
                category,
                value,
                date,
            });

            setTitle('');
            setCategory(null);
            setValue('');
            setDate('');
            
            navigation.navigate('Entries');
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            }); 
        } finally {
            setIsLoading(false);
        }
    }

    const categoriesOptions = useMemo(() => {
        return categories.map(category => ({
            label: category.name,
            value: category.name,
        }));
    }, [categories])

    useEffect(() => {
        handleFetchCategories();
    }, []);

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
                Adicionar nova entrada
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
                    loading={isLoadingCategories}
                    onSelect={option => setCategory(option)}
                    options={categoriesOptions}
                />

                <Input
                    label="Valor de entrada"
                    icon="dollar"
                    type={{ keyboard: 'numeric' }}
                    value={value}
                    onChangeText={setValue}
                />

                <Input
                    label="Data da entrada"
                    placeholder="00/00/0000"
                    icon="calendar"
                    value={date}
                    onChangeText={setDate}
                />
            </View>

            <Button
                text="Adicionar"
                icon="plus"
                loading={isLoading}
                onPress={handleAddEntry}
            />
        </View>
    );
}