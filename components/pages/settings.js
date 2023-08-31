import { View, Text, SectionList, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Surface, Switch } from "@react-native-material/core";
import folder from '../../assets/folder.png';
import download from '../../assets/download.png';
import notification from '../../assets/notification.png';
import darkmode from '../../assets/darkmode.png';
import global from '../../assets/global.png';
import contact from '../../assets/contact.png';
import about from '../../assets/about.png';


export default function Settings() {

    const [DarkMode, setDarkMode] = useState(false)
    const [wifi, setwifi] = useState(false)

    const settingsMenu = [
        {
            id: 1, title: 'CONTENT',
            data: [
                { id: 0, label: 'Medical Records', image: folder, },
                { id: 1, label: 'Downloads', image: download, },

            ],


        },
        {
            id: 2, title: 'PREFERENCES',
            data: [
                { id: 0, label: 'Languages', image: global, },
                { id: 1, label: 'Notifications and Sounds', image: notification, },
                { id: 2, label: 'Dark Mode', image: darkmode, },
                { id: 3, label: 'Use Wi-Fi', image: folder, },

            ],


        },
        {
            id: 3, title: 'HELP',
            data: [
                { id: 0, label: 'Report Bug', image: folder, },
                { id: 1, label: 'Contact Us', image: contact, },
                { id: 2, label: 'About US', image: about, },
                { id: 3, label: 'SwiiftoN FAQ', image: folder, },


            ],


        },
    ]

    return (
        <View className='container'>
            <View>
                <SafeAreaView>
                    <ScrollView>
                        <SectionList
                            sections={settingsMenu}
                            keyExtractor={(item, index) => { item + index }}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text className='text-xl p-3 '>{title}</Text>
                            )}
                            renderItem={(item) => {

                                return (
                                    <View className='px-2 container' >
                                        <Surface
                                            elevation={0.5}
                                        >
                                            <View className='p-4 container flex flex-row  justify-between  border-b-0.5 '>
                                                <View className=' flex flex-row items-center'>
                                                    <Image source={item.item.image} />
                                                    <Text className='px-2'>{item.item.label}</Text>
                                                </View>
                                                <View >
                                                    {item.item.label !== undefined && item.item.label == 'Dark Mode' ?
                                                        <Switch value={DarkMode} onValueChange={() => setDarkMode(!DarkMode)} />
                                                        :
                                                        item.item.label == 'Use Wi-Fi' ?
                                                            <Switch value={wifi} onValueChange={() => setwifi(!wifi)} />
                                                            :
                                                            <MaterialIcons name='chevron-right' size={25} color={'green'} />
                                                    }
                                                </View>

                                            </View>
                                        </Surface>
                                    </View>
                                )
                            }}
                        />

                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}