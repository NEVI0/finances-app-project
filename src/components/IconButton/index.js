import { TouchableOpacity } from 'react-native';

import { Icon } from '../Icon';

export const IconButton = ({ icon, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
            <Icon name={icon} color={color} />
        </TouchableOpacity>
    );
}