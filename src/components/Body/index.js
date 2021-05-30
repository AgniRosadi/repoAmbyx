import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { ImageAcc } from '../../assets'
const Body = () => {
    return (
        <View style={styles.page}>
            <Image source={ImageAcc} style={styles.logo} />
            <Text style={styles.text}>Congratulations!</Text>
            <Text style={styles.descript}>You have successfully booked a call! We
            have sent a confirmation to the customer.
            You can view this call under the "Confirmed" tab.</Text>
        </View>
    )
}

export default Body;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    descript: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Roboto-Regular'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
    },
    logo: {
        width: 180,
        height: 180,
        marginLeft: windowHeight * 0.08,
    },
    page: {
        padding: 10,
        marginHorizontal: 50,
        marginTop: windowHeight * 0.2,
    }
})