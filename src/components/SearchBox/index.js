import { TextInput, View } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const SearchBox = ({
    value,
    onChangeText,
    onFocus,
    onBlur,
}) => {
    return (
        <View style={styles.input}>
            <TextInput
                placeholder="Pesquisar"
                keyboardType="default"
                textContentType="none"
                style={styles.field}
                placeholderTextColor={theme.colors.text.light}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
            />

            <Icon name="search" color={theme.colors.primary} />
        </View>
    );
}