import { StyleSheet, Dimensions } from 'react-native';

import { STYLING } from '../../constants/styling';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        
        paddingHorizontal: STYLING.CONTAINER_SPACING,
        paddingTop: STYLING.CONTAINER_SPACING + STYLING.TOP_BAR_HEIGHT,
        paddingBottom: STYLING.CONTAINER_SPACING + STYLING.BOTTOM_BAR_HEIGHT,
        gap: STYLING.CONTAINER_SPACING,
        
        backgroundColor: theme.colors.container.main,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    },
    text: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.light
    },
});