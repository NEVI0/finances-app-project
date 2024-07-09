import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

const CHECKBOX_SIZE = 28;
const DEFAULT_CHECK_STYLE = {
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    checkDefault: {        
        ...DEFAULT_CHECK_STYLE,
        backgroundColor: theme.colors.container.light,
    },
    checkFill: {        
        ...DEFAULT_CHECK_STYLE,
        backgroundColor: theme.colors.primary
    },
    label: {
        ...theme.typography.text.small.main,
        color: theme.colors.text.main,
    }
});