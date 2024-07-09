import { StyleSheet } from 'react-native';

import { STYLING } from '../../../constants/styling';

import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        height: '100%',

        paddingHorizontal: STYLING.CONTAINER_SPACING,
        paddingTop: STYLING.CONTAINER_SPACING + STYLING.TOP_BAR_HEIGHT,
        paddingBottom: STYLING.CONTAINER_SPACING,
        gap: STYLING.CONTAINER_SPACING,

        justifyContent: 'space-between',
        backgroundColor: theme.colors.container.light,
    },
    main: {
        gap: STYLING.CONTAINER_SPACING,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    image: {
        width: 52,
        height: 52,

        borderWidth: 2,
        borderRadius: 12,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.container.main,

        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.text.main,
    },
    email: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.light,
    },
    title: {
        ...theme.typography.title.sub,
        color: theme.colors.text.main,
    },
    nav: {
        gap: STYLING.SECTION_SPACING,
    },
});