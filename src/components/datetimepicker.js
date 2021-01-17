import React, { useState } from 'react';
import { View, Button, Platform, Text, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';

const DatePicker = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View>
                <View
                    style={{
                        marginTop: 100,
                        backgroundColor: 'pink'
                    }}
                >
                    <View
                        style={{
                            marginLeft: wp('2%'),
                        }}
                    >
                        <Text
                            style={{
                                color: 'gray',
                            }}
                        >Date</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: wp('100%')
                        }}
                    >
                        <View
                            style={{
                                width: wp('90%'),
                                marginLeft: wp('2%')
                            }}
                        >
                            <TextInput
                                placeholder="Enter input"
                                style={{
                                    borderRadius: 20,
                                    borderColor: 'black',
                                }}
                            />
                        </View>
                        <View
                            style={{
                                right: 0,
                                width: wp('10%'),
                                marginRight: wp('2%'),
                                marginTop: hp('2%')
                            }}
                        >
                            <Icon
                                onPress={showDatepicker}
                                name="calendar"
                                size={hp('3%')}
                                color="black"
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        marginTop: wp('10%'),
        flexDirection: 'column',
    },
    dateInputCss: {
        borderColor: 'black',
        borderRadius: 10,
    },
});

export default DatePicker;