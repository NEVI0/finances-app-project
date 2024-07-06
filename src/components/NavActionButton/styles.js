import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    button: {
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
});