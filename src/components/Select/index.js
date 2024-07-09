import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { styles } from './styles';

const Option = () => {
    return (
        <Modal>

        </Modal>
    );
}

export const Select = ({
    label,
    sublabel,
    options,
    value,
    onSelect,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <Text style={styles.label}>
                    {label}
                </Text>

                <Text style={styles.sublabel}>
                    {sublabel}
                </Text>
            </View>

            <TouchableOpacity style={styles.input} activeOpacity={1}>
                <Text style={!!value ? styles.field : styles.placeholder}>
                    {!!value ? value : 'Selecionar'}
                </Text>

                <IconButton
                    icon="chevron-down"
                    color={theme.colors.primary}
                />
            </TouchableOpacity>
        </View>
    );
}