import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Gap } from '..'
import { IconNotif, IconSetting } from '../../assets'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Text style={styles.title}>Calls</Text>
            </View>
            <View style={styles.buttonAksi}>
                <View style={styles.cartWrapper}>
                    <IconNotif />
                    <View style={styles.notif}>
                        <Text style={styles.text}>0</Text>
                    </View>
                </View>
                <Gap width={10} />
                <IconSetting />
            </View>
        </View>
    )
}

export default Header;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text: {
        fontSize: 10,
        color: 'white',
    },
    notif: {
        backgroundColor: '#FF0000',
        padding: 7,
        borderRadius: 25,
        width: 5,
        height: 5,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    buttonAksi: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 90,
    },
    page: {
        width: '60%'
    },
    container: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 16,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
    }
})
