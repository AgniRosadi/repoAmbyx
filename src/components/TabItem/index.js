import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconDiscover, IconMessages, IconCalls, IconCallsActive, IconProfile } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Discover") return isFocused ? <IconDiscover /> : <IconDiscover />

        if (label === "Messages") return isFocused ? <IconMessages /> : <IconMessages />

        if (label === "Calls") return isFocused ? <IconCallsActive /> : <IconCalls />

        if (label === "Profile") return isFocused ? <IconProfile /> : <IconProfile />

        return <IconDiscover />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>

    );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE
    })
})
