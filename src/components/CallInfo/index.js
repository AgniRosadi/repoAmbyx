import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WARNA_ABU_MUDA } from '../../utils/constant'
import BottomIcon from '../BottomIcon'

const CallInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContent}>Call Info</Text>
            <View style={styles.content}>
                <BottomIcon title="Customer" />
                <Text style={styles.page}>Samuel L J</Text>
            </View>
            <View style={styles.content}>
                <BottomIcon title="Message" />
                <Text style={styles.page}>I hope to learn more about copywriting with this call. Thank you and have a nice day</Text>
            </View>
            <View style={styles.content}>
                <BottomIcon title="Duration" />
                <Text style={styles.page}>60 minutes</Text>
            </View>
        </View >
    )
}

export default CallInfo;
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
    page: {
        marginTop: -windowHeight * 0.02,
        marginLeft: windowWidth * 0.09,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'Roboto-SemiBold',
        padding: 16
    }
})
