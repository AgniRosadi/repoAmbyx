import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated';
import { WARNA_PREMIER } from '../../utils/constant';

const Tips = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>👉 Expert Tips to Make Your Call a Success</Text>
        </View>
    )
}

export default Tips;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: windowHeight * 0.03,
        backgroundColor: WARNA_PREMIER,
        paddingBottom: 20
    },
    text: {
        fontSize: 12,
        fontFamily: 'Roboto-SemiBold',
        color: 'white'
    }
})
