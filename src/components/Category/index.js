import { Text, View } from 'react-native';

import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { styles } from './styles';

export const Category = ({ name, onDelete }) => {
    return (
        <View style={styles.container} activeOpacity={0.5}>
            <Text style={styles.name}>
                {name}
            </Text>

            <IconButton
                icon="trash"
                color={theme.colors.others.error}
                onPress={onDelete}
            />
        </View>
    );
}