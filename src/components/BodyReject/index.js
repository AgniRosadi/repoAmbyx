import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { ImageReject } from '../../assets'
import { WARNA_ABU_MUDA, WARNA_UTAMA } from '../../utils/constant'
const BodyReject = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.text}>Are you sure you want to reject this call?</Text>
            <View style={styles.page}>
                <Image source={ImageReject} style={styles.logo} />
                <View style={styles.content}>
                    <Text style={styles.textContent}>Reason for Rejection (required)</Text>
                    <Text style={styles.textContent}>This will be visible to your cutomer</Text>
                </View>
                <Text style={styles.descript}>Please see our Cancellation & Rejection policy here</Text>
            </View>
        </View>
    )
}

export default BodyReject; const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    textContent: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        margin: 3,
        color: '#848a8D',
    },
    content: {
        backgroundColor: WARNA_ABU_MUDA,
        borderRadius: 12,
        padding: 10,
    },
    descript: {
        marginTop: 8,
        marginLeft: 15,
        fontSize: 14,
        color: WARNA_UTAMA,
        fontFamily: 'Roboto-Regular'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        marginTop: windowHeight * 0.07,
    },
    logo: {
        width: 180,
        height: 180,
        marginLeft: windowHeight * 0.08,
        marginBottom: 20
    },
    page: {
        padding: 10,
        marginHorizontal: 50,
        marginTop: windowHeight * 0.2,
    }
})