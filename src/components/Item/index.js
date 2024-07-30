import { Text, View } from 'react-native';

import { formatCurrency } from '../../helpers/formatCurrency';
import { formatStringToNumber } from '../../helpers/formatStringToNumber';

import { styles } from './styles';

export const Item = ({ name, category, value }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>
                    {name}
                </Text>

                <Text style={styles.category}>
                    {category}
                </Text>
            </View>

            <Text style={styles.value}>
                {formatCurrency(formatStringToNumber(value))}
            </Text>
        </View>
    );
}