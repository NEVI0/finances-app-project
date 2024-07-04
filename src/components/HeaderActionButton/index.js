import { Text, TouchableOpacity } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const HeaderActionButton = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name={icon} color={theme.colors.primary} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}