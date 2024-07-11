import { Platform, StatusBar } from 'react-native';

const TOP_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 20;
const BOTTOM_BAR_HEIGHT = 28;
const CONTAINER_SPACING = 32;
const SECTION_SPACING = 16;
const SUBSECTION_SPACING = 8;

export const STYLING = {
    TOP_BAR_HEIGHT,
    BOTTOM_BAR_HEIGHT,
    CONTAINER_SPACING,
    SECTION_SPACING,
    SUBSECTION_SPACING,
}