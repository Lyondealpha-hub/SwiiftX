import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import personnel from '../../assets/personnel.png'
import { Tab, TabView } from '@rneui/themed';
import InputTemplate from '../templates/inputTemplate';
import { TabViewItem } from '@rneui/base/dist/TabView/TabView.Item';

export default function ProfileEdit() {

    const [states, setStates] = useState({
        tabIndex: 0,
        disable: false
    })

    const updateStates = (key, value) => {
        setStates((prev) => ({ ...prev, [key]: value }))
    }

    const personalInfo = [
        { id: 0, label: "Username" },
        { id: 1, label: "Gender" },
        { id: 2, label: "Birthday" },
        { id: 3, label: "National ID" },
    ]
    const professionalInfo = [
        { id: 0, label: "Hospital name" },
        { id: 1, label: "Occupation / Role" },
        { id: 2, label: "Time availability" },
        { id: 3, label: "Years of experience" },

    ]

    return (
        <View className='container h-screen mx-auto '>
            {/* Profile Image */}
            <View className='container mt-4 justify-center items-center '>
                <Image className='justify-center items-center w-32 h-32' source={personnel} />
            </View>

            {/* Tabs Edit */}
            <View className='container mt-2 mx-auto'>
                <Tab
                    value={states.tabIndex}
                    onChange={(e) => updateStates('tabIndex', e)}
                    indicatorStyle={{
                        backgroundColor: 'red',
                        height: 3,
                    }}
                    variant="primary"

                >
                    <Tab.Item
                        title="Personal Information"
                        titleStyle={{ fontSize: '16px' }}
                        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                    />

                    <Tab.Item
                        title="Professional Information"
                        titleStyle={{ fontSize: '16px' }}
                        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}


                    />



                </Tab>
            </View>
            {/* tab views */}
            <View className='container h-full mx-auto mt-4'>
                <TabView className='' value={states.tabIndex} animationType="spring">
                    <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                        <View className='container mx-auto'>
                            {personalInfo.map(({ id, label }) => {
                                return (
                                    <View key={id}>
                                        <InputTemplate
                                            id={id}
                                            label={label}
                                            useRightIcon={true}
                                            rightIcon={'edit'}
                                            handleDisable={() => { updateStates('disable', !states.disable) }}
                                            disable={states.disable}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                        <View className='container mx-auto'>
                            {professionalInfo.map(({ id, label }) => {
                                return (
                                    <View key={id}>
                                        <InputTemplate
                                            id={id}
                                            label={label}
                                            useRightIcon={true}
                                            rightIcon={'edit'}
                                            handleDisable={() => { updateStates('disable', !states.disable) }}
                                            disable={states.disable}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    </TabView.Item>

                </TabView>

            </View>
            <View className='container h-48  absolute px-5  inset-x-0 bottom-0  '>
                <TouchableOpacity className='w-full mx-auto h-12 flex flex-row justify-center items-center  bg-purple-400 rounded-xl' >
                    <Text className='text-white text-lg   justify-center items-center'>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}