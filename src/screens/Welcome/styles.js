import { StyleSheet } from 'react-native';

import { STYLING } from '../../constants/styling';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: theme.colors.primary,
    },
    box: {
        height: '60%',

        borderTopRightRadius: STYLING.CONTAINER_SPACING,
        borderTopLeftRadius: STYLING.CONTAINER_SPACING,
        padding: STYLING.CONTAINER_SPACING,
        gap: STYLING.CONTAINER_SPACING,

        backgroundColor: theme.colors.container.main,
    },
    title: {
        ...theme.typography.title.big,
        color: theme.colors.text.main
    },
    strong: {
        color: theme.colors.primary
    },
    welcome: {
        gap: STYLING.SECTION_SPACING,
        flex: 1,
    },
    text: {
        ...theme.typography.text.normal.main,
        color: theme.colors.text.light
    },
    version: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.light,
        textAlign: 'center'
    },
});