import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { IconSucces } from '../../assets'
import { WARNA_ABU_MUDA } from '../../utils/constant'
import BottomIcon from '../BottomIcon'

const ConfirmeSlot = () => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Text style={styles.textContent}>Confirmed Time Slot</Text>
                <TouchableOpacity>
                    <IconSucces style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <BottomIcon title="Time Slot 01" />
                <Text style={styles.text}>22 Feb 2021 | 10:10 - 11:10</Text>
            </View>
        </View >
    )
}

export default ConfirmeSlot;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    content: {
        padding: 10
    },
    container: {
        backgroundColor: 'white',
        marginTop: 16,
        borderBottomWidth: 5,
        borderColor: WARNA_ABU_MUDA
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'Roboto-SemiBold',
        padding: 16
    },
    text: {
        marginTop: -windowHeight * 0.02,
        marginLeft: windowWidth * 0.09,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },
    page: {
        flexDirection: 'row',
    },
    icon: { marginTop: windowHeight * 0.02, marginLeft: -windowWidth * 0.02 },
})
