import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderBack, Booking, CallInfo, Earning, CallLink, ConfrimeSlot, Tips } from '../../components/'
import { ButtomDetails } from '..';


const Tab = createBottomTabNavigator();

const BookingDetails = ({ navigation }) => {
    const handleToGo = (screen) => {
        navigation.navigate(screen);
    }
    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderBack />
                <View style={styles.page}>
                    <Tips />
                    <Booking status="Confirmed" />
                </View>
                <ConfrimeSlot />
                <CallInfo />
                <Earning />
                <CallLink />
            </ScrollView>
            <Tab.Navigator>
                <Tab.Screen name="Go to Room" component={ButtomDetails} />
            </Tab.Navigator>
        </View >
    )
}

export default BookingDetails

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
