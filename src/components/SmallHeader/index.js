import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WARNA_ABU_ABU, WARNA_DISABLE, WARNA_PREMIER } from '../../utils/constant';

const SmallHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fullPage}>
                <View style={styles.page}>
                    <Text style={styles.text}>As an Expert</Text>
                </View>
                <View style={styles.sidePage}>
                    <Text style={styles.textCustomer}>As a Customer</Text>
                </View>
            </View>
        </View>
    )
}

export default SmallHeader;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        justifyContent: 'center',
        paddingLeft: windowHeight * 0.03,
    },
    fullPage: {
        borderRadius: 30,
        backgroundColor: WARNA_ABU_ABU,
        padding: windowHeight * 0.01,
        flexDirection: 'row',
        width: '90%',
        paddingLeft: windowHeight * 0.01,
    },
    page: {
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: WARNA_PREMIER,
        padding: 10,
        width: '50%',
        flexDirection: 'row',
    },
    sidePage: {
        marginLeft: windowHeight * 0.05,
        paddingTop: 10
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        color: 'white',

    },
    textCustomer: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },
})
