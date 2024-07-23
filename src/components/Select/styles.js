import { StyleSheet } from 'react-native';

import { theme } from '../../theme';
import { STYLING } from '../../constants/styling';

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

export const modal = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',

        justifyContent: 'flex-end'
    },
    box: {
        maxHeight: '60%',

        borderTopRightRadius: STYLING.CONTAINER_SPACING,
        borderTopLeftRadius: STYLING.CONTAINER_SPACING,
        padding: STYLING.CONTAINER_SPACING,
        gap: STYLING.CONTAINER_SPACING,

        backgroundColor: theme.colors.container.light,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        ...theme.typography.title.sub,
        color: theme.colors.text.main
    },
    option: {
        height: 44,
        borderRadius: 12,
        paddingHorizontal: 24,
        backgroundColor: theme.colors.container.main,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main
    },
    warning: {
        ...theme.typography.text.normal.main,
        color: theme.colors.others.warning
    },
});