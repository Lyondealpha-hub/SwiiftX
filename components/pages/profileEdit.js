import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import personnel from '../../assets/personnel.png'
import { Tab, TabView } from '@rneui/themed';

export default function ProfileEdit() {

    const [states, setStates] = useState({
        tabIndex: 0
    })

    const updateStates = (key, value) => {
        setStates((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <View className='container h-full'>
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
                    variant="default"
                >
                    <Tab.Item
                        title="Recent"
                        titleStyle={{ fontSize: 12 }}
                        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                    />
                    <Tab.Item
                        title="favorite"
                        titleStyle={{ fontSize: 12 }}
                        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                    />

                </Tab>

                {/* tab views */}
                <TabView value={states.tabIndex} animationType="spring">
                    <TabView.Item style={{ backgroundColor: 'black', width: '100%' }}>
                        <Text>Recent</Text>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                        <Text>Favorite</Text>
                    </TabView.Item>

                </TabView>

            </View>
            <Text></Text>
        </View>
    )
}