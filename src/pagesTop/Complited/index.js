import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { CallsList } from '../../components';

const Complited = ({ navigation }) => {
    const handleToGo = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTime}>TUE, 2 APR 2021</Text>
            <CallsList onPress={() => handleToGo('BookingDetails')} />
        </View>
    )
}

export default Complited;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    textTime: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 11
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})

