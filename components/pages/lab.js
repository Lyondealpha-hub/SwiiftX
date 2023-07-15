import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TopNav from '../navigaton/reusable/TopNav';
import InputTemplate from '../templates/inputTemplate';
import { Stack, Surface, Box, Wrap, ListItem, Avatar } from '@react-native-material/core'


export default function Labs() {

    const labList = [
        { id: 0, label: 'Add Tests', desc: 'Add previous tests to lab list' },
        { id: 1, label: 'Add Health Checkups', desc: 'Add previous tests to lab list' },
        { id: 2, label: 'Questionnaire Test', desc: 'Add previous tests to lab list' },
        { id: 3, label: 'Upload prescription', desc: 'Add previous tests to lab list' },
    ]

    return (
        <View className='container h-full'>
            <TopNav isSearch={true} />

            <View className='container mx-auto bg-slate-200'>
                {/* input field */}
                <View className='container '>
                    <View className='container flex flex-row'>
                        <View className='w-1/2'>
                            <InputTemplate
                                label={"Full Name on file"}
                                id={"details"}
                            />
                        </View>

                        <View className='w-1/2'>
                            <InputTemplate
                                label={"Contact info"}
                                id={"details"}
                            />
                        </View>
                    </View>

                    <View className='container flex flex-row '>
                        <View className='w-1/2' >
                            <InputTemplate
                                label={"Age"}
                                id={"details"}
                            />
                        </View>
                        <View className='w-1/2'>
                            <InputTemplate
                                label={"Gender"}
                                id={"details"}
                            />
                        </View>

                    </View>
                </View>
                {/* End of input feilds */}

                <View className='container my-4 px-3 '>

                    {labList.map(({ id, label, desc }) => {
                        return (
                            <View key={id} className='container py-1 rounded-xl '>
                                <ListItem
                                    // leadingMode="avatar"
                                    title={label}
                                    secondaryText={desc}


                                />

                            </View>

                        )
                    })}



                </View>



            </View>
            <View className='container h-16  absolute px-5  inset-x-0 bottom-0  '>
                <TouchableOpacity className='w-full mx-auto h-12 flex flex-row justify-center items-center  bg-purple-400 rounded-xl' >
                    <Text className='text-white text-lg   justify-center items-center'>Make a Request</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
