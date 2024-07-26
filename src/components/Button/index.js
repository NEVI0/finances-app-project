import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const Button = ({
    text,
    icon,
    iconColor = theme.colors.primary,
    type = 'primary',
    loading = false,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={styles[type].button}
            activeOpacity={0.5}
            disabled={loading}
            onPress={onPress}
        >
            <Text style={styles[type].text}>
                {text}
            </Text>

            {
                loading ? (
                    <ActivityIndicator
                        color={type === 'primary' ? theme.colors.text.main : iconColor}
                    />
                ) : (
                    <Icon
                        name={icon}
                        color={type === 'primary' ? theme.colors.text.main : iconColor}
                    />
                )
            }
        </TouchableOpacity>
    );
}