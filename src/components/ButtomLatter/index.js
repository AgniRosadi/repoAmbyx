import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constant'

const ButtomLatter = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>I'ii Do It Later</Text>
        </TouchableOpacity>
    )
}

export default ButtomLatter

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: WARNA_UTAMA
    }
})
