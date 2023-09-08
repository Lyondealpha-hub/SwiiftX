import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Pressable, Platform, Button, } from 'react-native';
import personnel from '../../assets/personnel.png'
// import personnel from '../../assets/personnel.png'
import { MaterialIcons } from '@expo/vector-icons';

import clock from '../../assets/clock.png';
import datex from '../../assets/date.png';
import DateTimePicker from '@react-native-community/datetimepicker'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Chip, Stack, Surface, } from '@react-native-material/core';
import { CheckBox } from '@rneui/base';
import dayjs from 'dayjs';



export default function DoctorProfile() {


    const [currentDate, setcurrentDate] = useState(dayjs().format('ddd DD MMM YYYY'));
    const [currentTime, setcurrentTime] = useState(dayjs().format('HH:mm:ss'));
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [showTime, setShowTime] = useState(false)
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [selectedIndex, setIndex] = React.useState(0);

    const toggleDatepicker = () => {
        setShowPicker(!showPicker)
    }
    const toggleTimepicker = () => {
        setShowTime(!showTime)
    }

    const onChange = (type, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate;
            setDate(currentDate)


            if (Platform.OS === 'android') {
                toggleDatepicker();
                setDate(currentDate.toDateString());
            }
        } else {
            toggleDatepicker()
        }
    }

    const onChange2 = ({ type }, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate;
            setDate(currentDate)

            if (Platform.OS === 'android') {
                toggleDatepicker();
                setDate(currentDate.toDateString());
            }
        } else {
            toggleDatepicker()
        }
    }



    return (
        <View className='container h-full '>

            <View className='container mt-4 h-full'>
                {/* Profile space */}
                <View className='container p-5 '>
                    <View className='container  justify-center items-center '>
                        <Image className='justify-center items-center ' source={personnel} />
                    </View>
                    {/* Name */}
                    <View className='justify-center items-center'>
                        <View className='container flex flex-row justify-center items-center'>
                            <Text className='text-lg px-2'>Dr. Afrane Aykire</Text>
                            <MaterialIcons name='verified' size={20} color={'purple'} />
                        </View>
                        <Text className='text-sm '>Dentist, BSMMC Hospital</Text>
                    </View>

                </View>

                <View className='container h-28 bg-slate-300 flex flex-row justify-evenly py-5'>
                    {/* Avalability */}
                    <View className=' w-1/3 h-10 items-center border-r-2 px-2 border-r-slate-500'>
                        <Text>Availability</Text>
                        <View className='w-full h-full flex flex-row px-2 justify-evenly items-center '>
                            <MaterialIcons className='' name='history' size={20} />
                            <Text >Mon - Sun</Text>
                        </View>

                        <Text className='text-xs container justify-center items-center'>9:30 AM - 4:00 PM </Text>

                    </View>

                    {/* Experience */}
                    <View className='w-1/3 items-center border-r-2 px-2 border-r-slate-500'>
                        <Text>Experience</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='analytics' size={20} />
                            <Text >6 Years</Text>
                        </View>
                    </View>

                    {/*Ratings  */}
                    <View className='w-1/3  items-center'>
                        <Text>Ratings</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='star' size={20} />
                            <Text >6 Years</Text>
                        </View>
                    </View>

                </View>

                <Text className='container flex py-2 px-3 text-lg'>About</Text>

                <View className='justify-center items-center'>
                    <Text>
                        Lorem ipsum is placeholder text commonly used
                        in the graphic, print, and publishing industries for previewing
                        layouts and visual mockups.Lorem ipsum dolor sit amet, consectetur adipiscing

                    </Text>
                </View>
                <ScrollView scrollToOverflowEnabled={true} className='h-full'>
                    {/* Schedule an appointment section */}
                    <View className='container py-1'>
                        <View className='bg-slate-300 container p-3'>
                            <Text className='container text-lg'>Schedule An Appointment</Text>
                        </View>


                        {(showPicker || showTime && Platform.OS === 'ios') && (
                            <View>
                                <Button onPress={showPicker ? toggleDatepicker : showTime && toggleTimepicker} title='Submit' />
                                {/* For buttons  */}
                            </View>
                        )}




                        {/* Date and Time */}
                        <View className='container flex flex-row justify-between items-center'>


                            <View className='w-1/2 px-3 py-2 flex flex-row'>

                                <Pressable onPress={toggleDatepicker} className='container border-[1px] border-slate-400 h-9 rounded-2xl  text-base  justify-center'>
                                    <Text className='flex-row px-2 text-base'>{currentDate}</Text>
                                </Pressable>

                                <Image style={dateTimeStyles.search_icon} className='justify-center items-center' source={datex} />
                                {/* <MaterialIcons  style={dateTimeStyles.search_icon} name='date-range' size={30} color={'purple'} /> */}
                            </View>


                            <View className='w-1/2 px-3 py-2 flex flex-row'>


                                <Pressable onPress={toggleTimepicker} className='container border-[1px] border-slate-400 h-9 rounded-2xl  text-base  justify-center'>
                                    <Text className='flex-row px-5 text-base'>{currentTime}</Text>
                                </Pressable>
                                <Image style={dateTimeStyles.search_icon} className='justify-center items-center' source={clock} />
                                {/* <MaterialIcons  style={dateTimeStyles.search_icon} name='timeline' size={30} color={'purple'} /> */}
                            </View>
                        </View>
                        {/* DatePicker Dispayed here */}
                        {showPicker ? (
                            <DateTimePicker
                                className='h-10'
                                mode={"datetime"}
                                value={currentDate}
                                display={'spinner'}
                                onChange={(event, selectedDate) => {
                                    const currentDate = selectedDate || currentTime;
                                    // setShowDatePicker(false);
                                    setcurrentTime(currentDate.getTime());
                                    console.log("TIIIIIIIIIIIIIMMMMMMMMEEEEEEEEE", selectedDate);
                                }}

                            />
                        )
                            :

                            showTime && (
                                <DateTimePicker
                                    className='h-10'
                                    mode='time'
                                    value={date}
                                    display={'spinner'}
                                    onChange={() => { onChange('set') }}

                                />
                            )

                        }



                        {/* DatePicker Dispayed here */}
                        { }



                        {/*ONline or IN-visit */}
                        {!(showPicker || showTime) && (
                            <View className='container flex flex-row justify-between items-center '>


                                <View className='container  py-2 flex flex-row justify-between items-center'>
                                    {/* <TouchableOpacity style={{borderWidth:0.5}}  className='w-full  shadow-2xl rounded-2xl py-2 px-3 text-base items-center justify-center'> */}
                                    <CheckBox
                                        title={"Online Consultation"}
                                        checked={selectedIndex === 0}
                                        onPress={() => setIndex(0)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                    />
                                    <CheckBox
                                        title={"Hospital In-Visit"}
                                        checked={selectedIndex === 1}
                                        onPress={() => setIndex(1)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                    />

                                    {/* </TouchableOpacity>  */}
                                    {/* <Image style={dateTimeStyles.search_icon}  className='justify-center items-center' source={date} /> */}
                                    {/* <MaterialIcons  style={dateTimeStyles.search_icon} name='date-range' size={30} color={'purple'} /> */}
                                </View>


                            </View>



                        )}

                        {/* Payment section */}

                        {!(showPicker || showTime) && (
                            <View className=' container '>
                                <View className='bg-slate-300 p-3'>
                                    <Text className='container text-lg'>Consultation Fees Information</Text>
                                </View>
                                <View className='flex flex-row justify-between p-3'>
                                    {/* Addons */}
                                    <View className='w-1/2 flex flex-row justify-start'>
                                        <Text className='text-lg italic'>
                                            {selectedIndex !== undefined && selectedIndex == 0 ? 'Online Consultation' : 'Hospital In-Visit'}
                                        </Text>
                                    </View>
                                    {/* Pricing */}
                                    <View className='w-1/2 flex flex-row justify-end'>
                                        <Text className='text-lg italic'>GHC 500</Text>
                                    </View>


                                </View>



                            </View>

                        )}



                    </View>
                </ScrollView>
                <View className='container h-20  absolute px-5  inset-x-0 bottom-0  '>
                    <TouchableOpacity className='w-full mx-auto h-12 flex flex-row justify-center items-center  bg-purple-400 rounded-xl' >
                        <Text className='text-white text-lg   justify-center items-center'>Book an Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


const dateTimeStyles = StyleSheet.create({
    search_icon: {
        marginHorizontal: -45,
        marginTop: 7,

    },
})
