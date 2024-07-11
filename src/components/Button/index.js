import { Text, TouchableOpacity } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const Button = ({ text, icon, iconColor = theme.colors.primary, type = 'primary', onPress }) => {
    return (
        <TouchableOpacity style={styles[type].button} activeOpacity={0.5} onPress={onPress}>
            <Text style={styles[type].text}>
                {text}
            </Text>

            <Icon
                name={icon}
                color={type === 'primary' ? theme.colors.text.main : iconColor}
            />
        </TouchableOpacity>
    );
}