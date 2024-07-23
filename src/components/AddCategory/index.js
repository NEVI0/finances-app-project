import { Modal, Text, View } from 'react-native';

import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { styles } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { useState } from 'react';

export const AddCategory = ({ open, onClose }) => {

    const [nome, setNome] = useState('')

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
                            label={'Nome'}
                            icon={'edit'}
                            value={nome}
                            onChangeText={setNome}
                        />
                        <Button
                            text={'Adicionar'}
                            icon={'plus'}
                            onPress={onClose}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}