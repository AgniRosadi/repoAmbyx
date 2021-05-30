import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Pending, Complited, Confirmed, Canceled
} from '../../pagesTop'

const Tab = createMaterialTopTabNavigator();
const ListMenu = () => {

    return (
        // <View style={styles.page}>
        //     <TouchableOpacity style={styles.container} onPress={onPress}>
        //         <Text style={styles.text}>{title}</Text>
        //     </TouchableOpacity>
        // </View>
        <Tab.Navigator>
            <Tab.Screen name="Pendding (2)" component={Pending} />
            <Tab.Screen name="Complited" component={Complited} />
            <Tab.Screen name="Confirmed" component={Confirmed} />
            <Tab.Screen name="Canceled" component={Canceled} />
        </Tab.Navigator>
    )
}

export default ListMenu;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {

        padding: 10,
        alignItems: 'center',
        marginVertical: windowHeight * 0.01,
        margin: 7,
    },
    page: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    }
})
