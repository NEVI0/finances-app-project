import { StyleSheet } from 'react-native';

import { STYLING } from '../../constants/styling';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: STYLING.CONTAINER_SPACING,
        backgroundColor: theme.colors.container.main
    },
    header: {
        marginTop: STYLING.CONTAINER_SPACING + STYLING.TOP_BAR_HEIGHT,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    title: {
        ...theme.typography.title.big,
        color: theme.colors.text.main,
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    smalltitle: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.light,
    },
    subtitle: {
        ...theme.typography.title.sub,
        color: theme.colors.text.main,
    },
    section: {
        gap: STYLING.SECTION_SPACING,
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    subsection: {
        gap: STYLING.SECTION_SPACING / 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
    },
    textGreen: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.others.success,
    },
    textRed: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.others.error,
    },
    message: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
        textAlign: 'center',
    },
});