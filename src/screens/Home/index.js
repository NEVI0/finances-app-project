import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { NavActionButton, IconButton, Item, NewItem, Button } from '../../components';

import { formatCurrency } from '../../helpers/formatCurrency';

import { fetchExpensesService } from '../../services/expenses';
import { fetchEntriesService } from '../../services/entry';
import { useSession } from '../../contexts';

import { theme } from '../../theme';
import { styles } from './styles';

const DATA_LIMIT = 5;

export const Home = ({ navigation }) => {
    const { user } = useSession();

    const [entreis, setEntries] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const [isLoadingEntries, setIsLoadingEntries] = useState(false);
    const [isLoadingExpenses, setIsLoadingExpenses] = useState(false);
    const [isNewItemModalVisible, setIsNewItemModalVisible] = useState(false);

    const handleFetchEntries = async () => {
        try {
            setIsLoadingEntries(true);

            const data = await fetchEntriesService(user.authUid, null, DATA_LIMIT);
            setEntries(data);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            });
        } finally {
            setIsLoadingEntries(false);
        }
    }

    const handleFetchExpenses = async () => {
        try {
            setIsLoadingExpenses(true);

            const data = await fetchExpensesService(user.authUid, null, DATA_LIMIT);
            setExpenses(data);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: error.message,
            });
        } finally {
            setIsLoadingExpenses(false);
        }
    }

    useEffect(() => {
        handleFetchEntries();
        handleFetchExpenses();
    }, []);

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
                    onPress={() => setIsNewItemModalVisible(!isNewItemModalVisible)}
                />
            </View>

            <View>
                <Text style={styles.smalltitle}>
                    Saldo disponível deste mês
                </Text>

                <Text style={styles.title}>
                    {formatCurrency(1766)}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>
                    Balanço geral
                </Text>

                <View style={styles.subsection}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Entradas
                        </Text>

                        <Text style={styles.textGreen}>
                            {formatCurrency(2000)}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Saídas
                        </Text>

                        <Text style={styles.textRed}>
                            {formatCurrency(3000)}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>
                    Principais entradas do mês
                </Text>

                <View style={styles.subsection}>
                    {
                        isLoadingEntries ? (
                            <ActivityIndicator color={theme.colors.primary} />
                        ) : !entreis.length ? (
                            <Text style={styles.message}>
                                Sem nenhuma entrada cadastrada!
                            </Text>
                        ) : entreis.map(entry => (
                            <Item
                                key={entry.title}
                                name={entry.title}
                                category={entry.category.label}
                                value={entry.value}
                            />
                        ))
                    }
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>
                    Principais saídas do mês
                </Text>

                <View style={styles.subsection}>
                    {
                        isLoadingExpenses ? (
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
            </View>

            <NewItem
                open={isNewItemModalVisible}
                onClose={() => setIsNewItemModalVisible(false)}
            >
                <Button
                    text="Entrada"
                    type="body"
                    icon="trending-up"
                    iconColor={theme.colors.others.success}
                    onPress={() => {
                        setIsNewItemModalVisible(false);
                        navigation.navigate('AddEntry')
                    }}
                />

                <Button
                    text="Saída"
                    type="body"
                    icon="trending-down"
                    iconColor={theme.colors.others.error}
                    onPress={() => {
                        setIsNewItemModalVisible(false);
                        navigation.navigate('AddExpense')
                    }}
                />
            </NewItem>
        </ScrollView>
    );
}