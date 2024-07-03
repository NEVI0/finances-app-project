import { Text, TextInput, View } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const Input = ({
    label,
    placeholder = '',
    icon,
    value,
    onChangeText,
    onFocus,
    onBlur,
    type = {
        keyboard: 'default',
        value: 'none',
    },
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <View style={styles.input}>
                <TextInput
                    keyboardType={type.keyboard}
                    textContentType={type.value}
                    style={styles.field}
                    placeholder={placeholder}
                    placeholderTextColor={theme.colors.text.light}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                <Icon name={icon} color={theme.colors.primary} />
            </View>
        </View>
    );
}