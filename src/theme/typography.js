import { StyleSheet } from 'react-native';

export const typography = {
    title: StyleSheet.create({
        big: {
            fontFamily: 'Inter-ExtraBold',
            fontSize: 26,
            letterSpacing: '2%',
        },
        main: {
            fontFamily: 'Inter-Bold',
            fontSize: 24,
        },
        sub: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 18,
        },
    }),
    text: {
        normal: StyleSheet.create({
            main: {
                fontFamily: 'Inter-Regular',
                fontSize: 16,
            },
            medium: {
                fontFamily: 'Inter-Medium',
                fontSize: 16,
            },
        }),
        small: StyleSheet.create({
            main: {
                fontFamily: 'Inter-Regular',
                fontSize: 12,
            },
            medium: {
                fontFamily: 'Inter-Medium',
                fontSize: 12,
            },
        }),
        smaller: StyleSheet.create({
            main: {
                fontFamily: 'Inter-Regular',
                fontSize: 10,
            },
        }),
    },
}