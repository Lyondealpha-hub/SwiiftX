import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TopNav from '../navigaton/reusable/TopNav';
import InputTemplate from '../templates/inputTemplate';
import { ListItem, Icon } from '@rneui/themed';
import redoarrow from '../../assets/redoarrow.png'

export default function Labs() {

    const labList = [
        { id: 0, label: 'Add Tests', desc: 'Add previous tests to lab list', bg: 'violet' },
        { id: 1, label: 'Add Health Checkups', desc: 'Add previous tests to lab list', bg: 'pink' },
        { id: 2, label: 'Questionnaire Test', desc: 'Add previous tests to lab list', bg: 'violet' },
        { id: 3, label: 'Upload prescription', desc: 'Add previous tests to lab list', bg: 'pink' },
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

                <View className='container my-1 px-3 '>

                    {labList.map(({ id, label, desc, bg }) => {
                        return (
                            <View key={id} className='container py-1 rounded-xl '>
                                <ListItem
                                    bottomDivider={true}
                                    containerStyle={{ borderRadius: 15, backgroundColor: bg }}
                                    className={`py-2.5 rounded-xl `}

                                >
                                    <ListItem.Content className={`py-2.5 rounded-xl  `}>
                                        <ListItem.Title className='py-1'>{label}</ListItem.Title>
                                        <ListItem.Subtitle className='text-xs'>{desc}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    {/* <ListItem.Chevron /> */}
                                    <Image source={redoarrow} alt="" />
                                    {/* <Icon name="inbox" type="material-community" color="grey" /> */}
                                </ListItem>

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
