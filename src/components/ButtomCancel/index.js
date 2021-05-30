import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import { WARNA_DISABLE, WARNA_UTAMA } from '../../utils/constant'

const ButtonCancel = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Cancel This Call</Text>
        </TouchableOpacity>
    )
}

export default ButtonCancel;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        padding: 10,
        backgroundColor: WARNA_DISABLE,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1,
        marginTop: windowWidth * 0.5,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: 'white'
    }
})
