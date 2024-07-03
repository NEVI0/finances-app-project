import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

const defaultButtonStyle = {
    height: 52,
    paddingHorizontal: 24,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const styles = {
    primary:  StyleSheet.create({
        button: {
            ...defaultButtonStyle,
            backgroundColor: theme.colors.primary,
        },
        text: {
            ...theme.typography.text.normal.medium,
            color: theme.colors.text.main
        },
    }),
    secondary:  StyleSheet.create({
        button: {
            ...defaultButtonStyle,
            backgroundColor: theme.colors.container.light,
        },
        text: {
            ...theme.typography.text.normal.medium,
            color: theme.colors.text.main
        },
    })
}