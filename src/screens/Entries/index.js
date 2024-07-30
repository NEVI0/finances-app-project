import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from 'react-native';

import { NavActionButton, IconButton, Item, SearchBox } from '../../components';

import { fetchEntriesService } from '../../services/entry';
import { useSession } from '../../contexts';

import { theme } from '../../theme';
import { styles } from './styles';

export const Entries = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [entreis, setEntries] = useState([]);

    const [isLoadingData, setIsLoadingData] = useState(false);

    const { user } = useSession();

    const handleFetchEntries = async () => {
        try {
            setIsLoadingData(true);

            const data = await fetchEntriesService(user.authUid, search);
            setEntries(data);
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
        handleFetchEntries();
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
                    onPress={() => navigation.navigate('AddEntry')}
                />
            </View>

            <Text style={styles.title}>
                Todas as entradas
            </Text>

            <SearchBox value={search} onChangeText={setSearch} />

            <View style={styles.section}>
                {
                    isLoadingData ? (
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
        </ScrollView>
    );
}