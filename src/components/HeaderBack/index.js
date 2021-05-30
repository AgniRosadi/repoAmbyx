import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { IconBack } from '../../assets'

const HeaderBack = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IconBack style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.page}>
                <Text style={styles.title}>Booking Details</Text>
            </View>
        </View>
    )
}

export default HeaderBack;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        width: '60%'
    },
    container: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
    },
    icon: {
        paddingLeft: windowHeight * 0.08,
    }
})
