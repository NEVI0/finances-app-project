import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from 'react-native';

import Toast from 'react-native-toast-message';

import { NavActionButton, IconButton, Category, SearchBox, AddCategory } from '../../components';

import { fetchCategoriesService } from '../../services/category';
import { useSession } from '../../contexts';

import { theme } from '../../theme';
import { styles } from './styles';

export const Categories = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { user } = useSession();

    const handleFetchCategories = async () => {
        try {
            setIsLoadingData(true);

            const data = await fetchCategoriesService(user.authUid, search);
            setCategories(data);
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
        handleFetchCategories();
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
                    onPress={() => setIsModalVisible(true)}
                />
            </View>

            <Text style={styles.title}>
                Todas as categorias
            </Text>

            <SearchBox value={search} onChangeText={setSearch} />

            <View style={styles.section}>
                {
                    isLoadingData ? (
                        <ActivityIndicator color={theme.colors.primary} />
                    ) : !categories.length ? (
                        <Text style={styles.message}>
                            Sem nenhuma categoria cadastrada!
                        </Text>
                    ) : categories.map(category => (
                        <Category
                            key={category.name}
                            name={category.name}
                        />
                    ))
                }
            </View>

            <AddCategory
                open={isModalVisible}
                onClose={() => {
                    setIsModalVisible(false);
                    handleFetchCategories();
                }}
            />
        </ScrollView>
    );
}