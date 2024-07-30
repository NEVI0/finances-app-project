import { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { createCategoryService } from '../../services/category';
import { useSession } from '../../contexts';

import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { styles } from './styles';

export const AddCategory = ({ open, onClose }) => {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useSession();

    const handleAddCategory = async () => {
        try {
            setIsLoading(true);

            await createCategoryService({
                authUid: user.authUid,
                name
            });

            setName('');
            onClose();
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

    return (
        <Modal
            visible={open}
            transparent={true}
            collapsable={true}
            statusBarTranslucent={true}
            animationType='slide'
        >
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Adicionar categoria
                        </Text>

                        <IconButton
                            icon="x"
                            color={theme.colors.primary}
                            onPress={onClose}
                        />
                    </View>

                    <View style={styles.content}>
                        <Input
                            label="Nome"
                            icon="edit"
                            background="main"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <Button
                        text="Adicionar"
                        icon="plus"
                        loading={isLoading}
                        onPress={handleAddCategory}
                    />
                </View>
            </View>
        </Modal>
    );
}