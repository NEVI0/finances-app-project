import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
    category: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.light,
    },
    value: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.text.main,
    },
});