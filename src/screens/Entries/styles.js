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
    message: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.main,
        textAlign: 'center',
    },
    section: {
        gap: STYLING.SECTION_SPACING,
        marginVertical: STYLING.CONTAINER_SPACING,
    },
});