import { Text, TouchableOpacity } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const Button = ({ text, icon, type = 'primary', onPress }) => {
    return (
        <TouchableOpacity style={styles[type].button} onPress={onPress}>
            <Text style={styles[type].text}>
                {text}
            </Text>

            <Icon
                name={icon}
                color={type === 'primary' ? theme.colors.text.main : theme.colors.primary}
            />
        </TouchableOpacity>
    );
}