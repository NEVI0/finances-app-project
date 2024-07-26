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
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    field: {
        flex: 1,
        height: '100%',

        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
});