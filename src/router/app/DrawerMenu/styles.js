import { StyleSheet } from 'react-native';

import { TOP_BAR_HEIGHT } from '../../../constants/topBarHeight';

import { theme } from '../../../theme';

const CONTAINER_SPACING = 32;
const SECTION_SPACING = 16;

export const styles = StyleSheet.create({
    container: {
        height: '100%',

        paddingHorizontal: CONTAINER_SPACING,
        paddingTop: CONTAINER_SPACING + TOP_BAR_HEIGHT,
        paddingBottom: CONTAINER_SPACING,
        gap: CONTAINER_SPACING,

        justifyContent: 'space-between',
        backgroundColor: theme.colors.container.light,
    },
    main: {
        gap: CONTAINER_SPACING,
    },
    title: {
        ...theme.typography.title.sub,
        color: theme.colors.text.main,
    },
    nav: {
        gap: SECTION_SPACING,
    }
});