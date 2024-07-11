import { StyleSheet } from 'react-native';

import { STYLING } from '../../constants/styling';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
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
    profile: {
        alignItems: 'center',
    },
    image: {
        width: 84,
        height: 84,

        borderWidth: 2,
        borderRadius: 100,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.container.main,

        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        ...theme.typography.title.main,
        color: theme.colors.text.main,
        textAlign: 'center',
    },
    email: {
        ...theme.typography.title.sub,
        color: theme.colors.text.light,
        textAlign: 'center',
    },
    section: {
        gap: STYLING.SECTION_SPACING,
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    subtitle: {
        ...theme.typography.title.sub,
        color: theme.colors.text.main,
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
    textMedium: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.text.main,
    },
    textGreen: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.others.success,
    },
});