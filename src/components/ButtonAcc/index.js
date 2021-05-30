import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constant'

const ButtonAcc = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Accept Booking</Text>
        </TouchableOpacity>
    )
}

export default ButtonAcc

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        padding: 10,
        backgroundColor: WARNA_UTAMA,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: 'white'
    }
})
