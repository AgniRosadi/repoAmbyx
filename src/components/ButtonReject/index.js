import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonReject = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Reject This Call</Text>
        </TouchableOpacity>
    )
}

export default ButtonReject

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
        color: 'red'
    }
})
