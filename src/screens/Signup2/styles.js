import { StyleSheet, Dimensions } from 'react-native';

import { STYLING } from '../../constants/styling';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {        
        paddingHorizontal: STYLING.CONTAINER_SPACING,
        // paddingTop: STYLING.CONTAINER_SPACING + STYLING.TOP_BAR_HEIGHT,
        // paddingBottom: STYLING.CONTAINER_SPACING + STYLING.BOTTOM_BAR_HEIGHT,
        // gap: STYLING.CONTAINER_SPACING,
        
        backgroundColor: theme.colors.container.main,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginTop: STYLING.CONTAINER_SPACING + STYLING.TOP_BAR_HEIGHT,
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    subheader: {
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    title: {
        ...theme.typography.title.big,
        color: theme.colors.text.main,
    },
    subtitle: {
        ...theme.typography.title.sub,
        color: theme.colors.text.light,
    },
    section: {
        gap: STYLING.SECTION_SPACING,
        marginBottom: STYLING.CONTAINER_SPACING,
    },
    form: {
        gap: STYLING.SECTION_SPACING,
    },
    text: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.light
    },
    warning: {
        ...theme.typography.text.normal.medium,
        color: theme.colors.others.warning
    },
    footer: {
        padding: STYLING.CONTAINER_SPACING,
        backgroundColor: theme.colors.container.main,
    }
});