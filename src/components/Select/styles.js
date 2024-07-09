import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    labels: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 8,
    },
    label: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
    sublabel: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.light,
        lineHeight: 22
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
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
        flex: 1,
    },
    placeholder: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.light,
        flex: 1,
    },
});