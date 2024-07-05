import { StyleSheet } from 'react-native';

import { TOP_BAR_HEIGHT } from '../../constants/topBarHeight';

import { theme } from '../../theme';

const SECTION_SPACING = 16;
const CONTAINER_SPACING = 32;

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: CONTAINER_SPACING,
        backgroundColor: theme.colors.container.main
    },
    header: {
        marginTop: CONTAINER_SPACING + TOP_BAR_HEIGHT,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        marginBottom: CONTAINER_SPACING,
    },
    title: {
        ...theme.typography.title.big,
        color: theme.colors.text.main,
        marginBottom: CONTAINER_SPACING,
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
        gap: SECTION_SPACING,
        marginBottom: CONTAINER_SPACING,
    },
    subsection: {
        gap: SECTION_SPACING / 2,
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
});