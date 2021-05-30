import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { CallsList } from '../../components'

const Pending = ({ navigation }) => {
    const handleToGo = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View>
            <Text style={styles.textTime}>TUE, 2 APR 2021</Text>
            <CallsList onPress={() => handleToGo('Details')} />
            <CallsList />
        </View>
        // <View style={styles.container}>
        //     <View style={styles.page}>
        //         <Image source={ImageCalls} style={styles.logo} />
        //     </View>
        //     <Text style={styles.text}>Your list of Pending Calls will appear here</Text>
        // </View>
    )
}

export default Pending;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Roboto-Regular'
    },
    textTime: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 11
    },
    logo: {
        width: 180,
        height: 180,
        marginLeft: windowHeight * 0.08,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    page: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginHorizontal: 50,
        backgroundColor: 'white',
        marginTop: windowHeight * 0.2,
    }
})
