import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from 'react-native';

import { NavActionButton, IconButton, Item, SearchBox } from '../../components';

import { fetchExpensesService } from '../../services/expenses';
import { useSession } from '../../contexts';

import { theme } from '../../theme';
import { styles } from './styles';

export const Expenses = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [expenses, setExpenses] = useState([]);

    const [isLoadingData, setIsLoadingData] = useState(false);

    const { user } = useSession();

    const handleFetchExpenses = async () => {
        try {
            setIsLoadingData(true);

            const data = await fetchExpensesService(user.authUid, search);
            setExpenses(data);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            });
        } finally {
            setIsLoadingData(false);
        }
    }

    useEffect(() => {
        handleFetchExpenses();
    }, [search]);

    return (
        <ScrollView style={styles.container}>
            <StatusBar animated translucent barStyle="light-content" />

            <View style={styles.header}>
                <NavActionButton
                    icon="menu"
                    text="Menu"
                    onPress={navigation.toggleDrawer}
                />

                <IconButton
                    icon="plus"
                    color={theme.colors.primary}
                    onPress={() => navigation.navigate('AddExpense')}
                />
            </View>

            <Text style={styles.title}>
                Todas as saídas
            </Text>

            <SearchBox value={search} onChangeText={setSearch} />

            <View style={styles.section}>
                {
                    isLoadingData ? (
                        <ActivityIndicator color={theme.colors.primary} />
                    ) : !expenses.length ? (
                        <Text style={styles.message}>
                            Sem nenhuma saída cadastrada!
                        </Text>
                    ) : expenses.map(expense => (
                        <Item
                            key={expense.title}
                            name={expense.title}
                            category={expense.category.label}
                            value={expense.value}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );
}