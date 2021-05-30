import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderBack, Booking, TimeSlot, CallInfo, Earning, ButtonAcc, ButtonReject } from '../../components/'

const Details = ({ navigation }) => {
    const handleToGo = (screen) => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <HeaderBack />
                    <Booking status="Pending" />
                </View>
                <TimeSlot />
                <CallInfo />
                <View style={styles.bayar}>
                    <Earning />
                    <ButtonAcc onPress={() => handleToGo('AccCall')} />
                    <ButtonReject onPress={() => handleToGo('RejectCall')} />
                </View>
            </ScrollView>
        </View >
    )
}

export default Details

const styles = StyleSheet.create({
    bayar: {
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})
