import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant';

const Booking = ({ status }) => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Text style={styles.title}>Booking ID</Text>
                <Text style={styles.value}>#12312312344</Text>
            </View>
            <View style={styles.page}>
                <Text style={styles.title}>Listing</Text>
                <Text style={styles.valueOne}>How To Do Your Own Brand Copywriting</Text>
            </View>
            <View style={styles.page}>
                <Text style={styles.title}>Status</Text>
                <View style={styles.content(status)}>
                    <Text style={styles.statusValue}>{status}</Text>
                </View>
            </View>
        </View >
    )
}

export default Booking;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: WARNA_ABU_ABU,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1,
        marginTop: 16,
        marginBottom: 20
    },
    page: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    value: {
        marginRight: windowWidth * 0.3, fontSize: 14, fontFamily: 'Roboto-Regular'
    },
    valueOne: {
        fontSize: 14, fontFamily: 'Roboto-Regular'
    },
    content: (status) => ({
        backgroundColor: status === 'Pending' ? WARNA_SEKUNDER : status === 'Confirmed' ? '#A0DDFF' : WARNA_WARNING,
        borderRadius: 20,
        width: 84,
        height: 24,
        marginRight: windowWidth * 0.3
    }),
    statusValue: {
        fontSize: 10,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        marginTop: 4
    },
    title: { color: '#848A8D', fontSize: 14, fontFamily: 'Roboto-Regular' }
})
