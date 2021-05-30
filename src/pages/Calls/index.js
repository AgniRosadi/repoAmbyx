import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { ImageCalls } from '../../assets'
import { Header, SmallHeader, ListMenu } from '../../components/'

const Calls = () => {
    return (
        <View style={styles.container}>
            <Header />
            <SmallHeader />
            <ListMenu />
            {/* <View style={styles.layanan}>
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.iconLayanan}>
                        <ListMenu title="Pending (2)" />
                        <ListMenu title="Confirmed" />
                        <ListMenu title="Completed" />
                        <ListMenu title="Cancel" />
                        <ListMenu title="Cancel" />
                        <ListMenu title="Cancel" />
                    </View>
                </ScrollView>
            </View> */}
            {/* <View style={styles.ImageDefault}>
                <Image source={ImageCalls}></Image>
            </View> */}
        </View>
    )
}

export default Calls

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    iconLayanan: {
        flexDirection: 'row',
        marginTop: 1,
    }
})
