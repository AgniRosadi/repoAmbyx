import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { IconClose } from '../../assets'

const HeaderReject = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IconClose style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.page}>
                <Text style={styles.title}>Reject This Call</Text>
            </View>
        </View>
    )
}

export default HeaderReject;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    page: {
        width: '65%'
    },
    container: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10

    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
    },
    icon: {
        paddingLeft: windowHeight * 0.08,
    }
})
