import { useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';

import { NavActionButton, IconButton, Category, SearchBox } from '../../components';

import { theme } from '../../theme';
import { styles } from './styles';

export const Categories = ({ navigation }) => {
    const [search, setSearch] = useState('');

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
                    onPress={() => console.log('new')}
                />
            </View>

            <Text style={styles.title}>
                Todas as categorias
            </Text>

            <SearchBox value={search} onChangeText={setSearch} />

            <View style={styles.section}>
                {
                    new Array(10).fill(0).map((_, index) => (
                        <Category
                            key={index}
                            name="Nome da categoria"
                            onDelete={() => console.log(index)}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );
}