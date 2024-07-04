import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../Icon';

import { styles } from './styles';
import { theme } from '../../theme';

export const CheckBox = ({ checked, label, onToggle }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onToggle}>
            <View style={checked ? styles.checkFill : styles.checkDefault}>
                {checked && <Icon name="check" size={20} color={theme.colors.text.main} />}
            </View>

            <Text style={styles.label}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}