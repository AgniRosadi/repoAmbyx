import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { ButtonAcc, ButtonReject } from '..'
import { IconInfo, IconList } from '../../assets'
import { WARNA_BERHASIL } from '../../utils/constant'

const Earning = () => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Text style={styles.textContent}>Potential Earnings</Text>
                <TouchableOpacity>
                    <IconInfo style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconList} >
                <IconList />
                <Text style={styles.text}>$60</Text>
            </View>
        </View>
    )
}

export default Earning;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    text: { marginLeft: 10, fontSize: 14, fontFamily: 'Roboto-Regular', color: WARNA_BERHASIL },
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
