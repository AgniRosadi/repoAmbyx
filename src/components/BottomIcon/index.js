import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDate, IconTime, IconUser, IconWa } from '../../assets'
import { WARNA_PREMIER } from '../../utils/constant';

const BottomIcon = ({ title }) => {
    const Icon = () => {
        if (title === "Customer") return <IconUser />

        if (title === "Message") return <IconWa />

        if (title === "Duration") return <IconTime />

        if (title === "Time Slot 01") return <IconDate />

        return <IconUser />
    };
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon />
            </View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default BottomIcon

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    icon: {
        padding: 7,
        borderRadius: 10
    },
    text: {
        fontSize: 10,
        fontFamily: 'Roboto-bold',
        color: '#848A8D'
    }
})
