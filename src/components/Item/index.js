import { Text, TouchableOpacity, View } from 'react-native';

import { formatCurrency } from '../../helpers/formatCurrency';
import { styles } from './styles';

export const Item = ({ name, category, value, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
            <View>
                <Text style={styles.name}>
                    {name}
                </Text>

                <Text style={styles.category}>
                    {category}
                </Text>
            </View>

            <Text style={styles.value}>
                {formatCurrency(value)}
            </Text>
        </TouchableOpacity>
    );
}