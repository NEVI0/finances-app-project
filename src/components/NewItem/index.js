import { Modal, Text, View } from 'react-native';

import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { styles } from './styles';

export const NewItem = ({ open, onClose, children }) => {
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
                            Adicionar
                        </Text>

                        <IconButton
                            icon="x"
                            color={theme.colors.primary}
                            onPress={onClose}
                        />
                    </View>

                    <View style={styles.content}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
}