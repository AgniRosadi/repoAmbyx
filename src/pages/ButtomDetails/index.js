import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtomDetails = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>ButtomDetails</Text>
            <Text>ButtomDetails</Text>
        </TouchableOpacity>
    )
}

export default ButtomDetails

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
