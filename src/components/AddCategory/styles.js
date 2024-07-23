import { StyleSheet } from "react-native";
import { STYLING } from "../../constants/styling";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

        justifyContent: 'flex-end'
    },
    box: {
        maxHeight: '60%',

        borderTopRightRadius: STYLING.CONTAINER_SPACING,
        borderTopLeftRadius: STYLING.CONTAINER_SPACING,
        padding: STYLING.CONTAINER_SPACING,
        gap: STYLING.CONTAINER_SPACING,

        backgroundColor: theme.colors.container.light,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        ...theme.typography.title.sub,
        color: theme.colors.text.main
    },
    content: {
        gap: STYLING.SECTION_SPACING,
    },
});