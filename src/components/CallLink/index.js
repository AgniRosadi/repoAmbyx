import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { IconInfo, IconLink, IconCopy, IconShare } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const CallLink = () => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Text style={styles.textContent}>Call Link</Text>
                <TouchableOpacity>
                    <IconInfo style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconList} >
                <IconLink />
                <Text style={styles.text}>https://www.ambyx.io/afwafwkwlgnalwgn</Text>
            </View>
            <View style={styles.link}>
                <TouchableOpacity style={styles.content}>
                    <IconCopy />
                    <Text style={styles.title}>COPY LINK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content}>
                    <IconShare />
                    <Text style={styles.title}>SHARE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CallLink;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    title: {
        color: WARNA_UTAMA,
        fontFamily: 'Roboto-SemiBold',
        fontSize: 12
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    content: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    text: { marginLeft: 10, fontSize: 14, fontFamily: 'Roboto-Regular' },
    iconList: {
        marginLeft: 15,
        margin: 10,
        marginTop: -windowHeight * 0.01,
        flexDirection: 'row'
    },
    icon: { marginTop: windowHeight * 0.02, marginLeft: -windowWidth * 0.02 },
    page: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: 'white',
        marginTop: 16,
        paddingBottom: 20,
        flex: 1
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'Roboto-SemiBold',
        padding: 16
    }
})
