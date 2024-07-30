import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import { theme } from '../../theme';
import { STYLING } from '../../constants/styling';
import { modal, styles } from './styles';

const Options = ({ open, options = [], selectedValue, onSelect, onClose }) => {
    
    const handleSelectItem = item => {
        onSelect(item);
        onClose();
    }
    
    return (
        <Modal
            visible={open}
            transparent={true}
            collapsable={true}
            statusBarTranslucent={true}
            animationType='slide'
        >
            <View style={modal.container}>
                <View style={modal.box}>
                    <View style={modal.header}>
                        <Text style={modal.title}>
                            Opções
                        </Text>

                        <IconButton
                            icon="x"
                            color={theme.colors.primary}
                            onPress={onClose}
                        />
                    </View>

                    {options.length === 0 ? (
                        <Text style={modal.warning}>
                            Sem opções disponíveis...
                        </Text>
                    ) : (
                        <FlatList
                            data={options}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={option => String(option.value)}
                            ListHeaderComponent={() => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ ...modal.option, marginBottom: STYLING.SUBSECTION_SPACING }}
                                    onPress={() => handleSelectItem(null)}
                                >
                                    <Text style={modal.label}>
                                        Deselecionar
                                    </Text>
                                </TouchableOpacity>
                            )}
                            renderItem={option => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={modal.option}
                                    onPress={() => handleSelectItem(option.item)}
                                >
                                    <Text style={modal.label}>
                                        {option.item.label}
                                    </Text>

                                    {
                                    !!selectedValue
                                    ? selectedValue.value === option.item.value
                                    ? <Icon name="check" color={theme.colors.primary} />
                                    : <View /> : <View />
                                    }
                                </TouchableOpacity>
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={{ height: STYLING.SUBSECTION_SPACING }} />
                            )}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
}

export const Select = ({
    label,
    sublabel,
    options,
    loading = false,
    selectedValue,
    onSelect,
}) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <Text style={styles.label}>
                    {label}
                </Text>

                <Text style={styles.sublabel}>
                    {sublabel}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.input}
                disabled={loading}
                activeOpacity={1}
                onPress={() => setIsOptionsOpen(!isOptionsOpen)}
            >
                <Text style={!!selectedValue ? styles.field : styles.placeholder}>
                    {!!selectedValue ? selectedValue.label : 'Selecionar'}
                </Text>

                {
                    loading ? (
                        <ActivityIndicator color={theme.colors.primary} />
                    ) : (
                        <Icon
                            name="chevron-down"
                            color={theme.colors.primary}
                        />
                    )
                }
            </TouchableOpacity>

            <Options
                open={isOptionsOpen}
                options={options}
                selectedValue={selectedValue}
                onSelect={onSelect}
                onClose={() => setIsOptionsOpen(!isOptionsOpen)}
            />
        </View>
    );
}