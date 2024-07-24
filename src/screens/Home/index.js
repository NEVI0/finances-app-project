import { useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';

import { NavActionButton, IconButton, Item, NewItem, Button } from '../../components';

import { formatCurrency } from '../../helpers/formatCurrency';

import { useSession } from '../../contexts';

import { theme } from '../../theme';
import { styles } from './styles';

export const Home = ({ navigation }) => {
    const { user } = useSession()

    const [isNewItemModalVisible, setIsNewItemModalVisible] = useState(false);

    console.log({user})

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
                        new Array(8).fill(0).map((_, index) => (
                            <Item
                                key={index}
                                name="Nome do item"
                                category="Categoria"
                                value={2000}
                                onPress={() => console.log(index)}
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
                        new Array(8).fill(0).map((_, index) => (
                            <Item
                                key={index}
                                name="Nome do item"
                                category="Categoria"
                                value={2000}
                                onPress={() => console.log(index)}
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