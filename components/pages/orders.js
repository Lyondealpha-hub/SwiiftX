import { View, Text, TouchableOpacity, Image, FlatList, TextInput, ScrollView,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import prep from '../../assets/prep.jpeg'
import prep1 from '../../assets/prep1.png'
import prep2 from '../../assets/prep2.png'
import { MaterialIcons } from '@expo/vector-icons';
import doc from '../../assets/doc.jpg'


export default function Orders() {



    const carsData = [
        {
            id: "Swiift-X-123",
            title: "prep",
            multiplier: 1,
            image: prep,
        },
        {
            id: "Swiift-XL-12",
            title: "Phen24",
            multiplier: 1.2,
            image: prep1,
        },
        {
            id: "Swiift-XL-124",
            title: "Prozen",
            multiplier: 1.2,
            image: prep2,
        },


    ]
    const [noItem, setNoItem] = useState(0)

    return (
        <View>
            <Text>orders</Text>
            <View className='contianer h-1/6'>
                <ImageBackground resizeMode='cover' source={doc} className='h-full flex  flex-row  mx-2 rounded-3xl py-1 '>
                    <View className='w-4/5 justify-center px-3'>
                        <Text className='text-xl  text-white items-center flex-wrap-reverse'>Looking For Specialist Doctor?</Text>
                        <Text className='text-white'>Join with an Online consultation</Text>
                    </View>

                </ImageBackground>
            </View>

            <View className='continer flex flex-row mt-36 '>
                <FlatList
                    data={carsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image }, item }) => {

                        return (
                            <View className={`conatiner flex justify-between items-center flex-row p-1.5  `}>
                                <Image
                                    style={{
                                        width: 90,
                                        height: 90,
                                        resizeMode: "contain",
                                    }}
                                    source={image}
                                    className='border-[1px] rounded-xl border-gray-300'
                                />
                                <View className='w-[37%] '>
                                    <Text className='text-lg font-semibold'>{title}</Text>
                                    <Text className=' text-sm font-extralight'>something about drug</Text>
                                    <Text className=' text-base'>GHC 45.05</Text>
                                </View>

                                <View className=''>

                                    <TouchableOpacity className='px-1 py-1 border-[1px] border-gray-300 rounded'   >
                                        <Text>Status : <Text className='text-green-700'>Ongoing</Text></Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )
                    }}

                />
            </View>
        </View >
    )
}