import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Discover, Messages, Calls, Profile, Details, AccCall, RejectCall, BookingDetails, ButtomDetails } from '../pages';
import { BottomNavigator } from '../components/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Calls" component={Calls} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};



const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            <Stack.Screen name="AccCall" component={AccCall} options={{ headerShown: false }} />
            <Stack.Screen name="RejectCall" component={RejectCall} options={{ headerShown: false }} />
            <Stack.Screen name="BookingDetails" component={BookingDetails} options={{ headerShown: false }} />
            <Stack.Screen name="ButtomDetails" component={ButtomDetails} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

export default Router

const styles = StyleSheet.create({})
