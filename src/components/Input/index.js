import { Text, TextInput, View } from 'react-native';

import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { styles } from './styles';

export const Input = ({
    label,
    sublabel,
    placeholder = '',
    icon,
    value,
    onChangeText,
    onFocus,
    onBlur,
    onPressIcon,
    isPassword = false,
    type = {
        keyboard: 'default',
        value: 'none',
    },
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

            <View style={styles.input}>
                <TextInput
                    keyboardType={type.keyboard}
                    textContentType={isPassword ? 'password' : type.value}
                    secureTextEntry={isPassword}
                    style={styles.field}
                    placeholder={placeholder}
                    placeholderTextColor={theme.colors.text.light}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                <IconButton
                    icon={icon}
                    color={theme.colors.primary}
                    onPress={onPressIcon}
                />
            </View>
        </View>
    );
}