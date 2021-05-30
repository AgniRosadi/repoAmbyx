import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { ImageProfile, IconLeft } from '../../assets';


const CallsList = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={ImageProfile} style={styles.images} />
            <View style={styles.text}>
                <Text style={styles.title}>Samuel L.J</Text>
                <Text style={styles.status}>How To Do Your Own Brand Copywriting</Text>
            </View>
            <IconLeft style={styles.icon} />
        </TouchableOpacity >
    )
}

export default CallsList;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    icon: {
        marginLeft: 120
    },
    images: {
        width: 24,
        height: 24
    },
    container: {
        backgroundColor: '#FFFFFF',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
        marginTop: windowHeight * 0.01,
        flexDirection: 'row',
    },
    text: {
        marginLeft: windowWidth * 0.02,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Roboto-SemiBold'
    },
    status: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: '#848A8D'
    }
})
