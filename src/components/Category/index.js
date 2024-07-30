import { Text, View } from 'react-native';

import { Icon } from '../Icon';

import { theme } from '../../theme';
import { styles } from './styles';

export const Category = ({ name }) => {
    return (
        <View style={styles.container} activeOpacity={0.5}>
            <Text style={styles.name}>
                {name}
            </Text>

            <Icon
                name="tag"
                color={theme.colors.primary}
            />
        </View>
    );
}