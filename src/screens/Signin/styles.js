import { StyleSheet, Dimensions } from 'react-native';

import { TOP_BAR_HEIGHT } from '../../constants/topBarHeight';
import { BOTTOM_BAR_HEIGHT } from '../../constants/bottomBarHeight';

import { theme } from '../../theme';

const SECTION_SPACING = 16;
const CONTAINER_SPACING = 32;

export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        
        paddingHorizontal: CONTAINER_SPACING,
        paddingTop: CONTAINER_SPACING + TOP_BAR_HEIGHT,
        paddingBottom: CONTAINER_SPACING + BOTTOM_BAR_HEIGHT,
        gap: CONTAINER_SPACING,
        
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

        width: 230,
    },
    section: {
        gap: SECTION_SPACING,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SECTION_SPACING,
    },
    or: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.light,
    },
    line: {
        height: 1,
        width: 50,
        backgroundColor: theme.colors.text.light,
    }
});