import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderReject, BodyReject, ButtomCancel } from '../../components/'

const RejectCall = () => {
    return (
        <View>
            <HeaderReject />
            <BodyReject />
            <ButtomCancel />
        </View>
    )
}

export default RejectCall

const styles = StyleSheet.create({})
