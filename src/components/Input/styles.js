import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    label: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
    input: {
        height: 52,
        paddingHorizontal: 24,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

        backgroundColor: theme.colors.container.light,
    },
    field: {
        flex: 1,
        height: '100%',

        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
});