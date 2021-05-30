import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { WARNA_ABU_MUDA } from '../../utils/constant';

const TimeSlot = () => {
    const [value, setValue] = React.useState('first');
    return (
        <View style={styles.container}>
            <Text style={styles.textContent}>Select a Time Slot</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.content}>
                    <View style={styles.page}>
                        <RadioButton value="first" />
                        <Text style={styles.text}>24 Apr 2021 | 10.00 - 11.00</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.page}>
                        <RadioButton value="first" />
                        <Text style={styles.text}>25 Apr 2021 | 11.00 - 12.00</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.page}>
                        <RadioButton value="first" />
                        <Text style={styles.text}>24 Apr 2021 | 14.50 - 15.50</Text>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    )
}

export default TimeSlot;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 16,
    },
    page: {
        marginRight: windowWidth * 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    text: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'Roboto-Regular'
    },
    content: {
        borderBottomWidth: 1,
        borderColor: WARNA_ABU_MUDA,
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'Roboto-SemiBold',
        padding: 16
    }
})
