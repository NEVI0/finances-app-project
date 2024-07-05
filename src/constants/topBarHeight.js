import { Platform, StatusBar } from 'react-native';

export const TOP_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 20;