import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import uber from '../../assets/uber.jpg'
import bike from '../../assets/bike.jpg'

const RideOptionsCard = () => {

    const carsData = [
        {
            id: "Uber-X-123",
            title: "UberX",
            multiplier: 1,
            image: uber,
        },
        {
            id: "Uber-XL-12",
            title: "UberX",
            multiplier: 1.2,
            image: bike,
        },


    ]

    return (
        <View className='container '>
            <View className=' flex-row justify-center items-center'>
                <Text className='p-2 text-xl '>Select a Ride</Text>
            </View>

            <View>
                <FlatList
                    data={carsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image } }) => {
                        return (
                                <TouchableOpacity className='conatiner flex  flex-row p-2.5'>
                                    <Image
                                        style={{
                                            width: 100,
                                            height: 100,
                                            resizeMode: "contain",
                                        }}
                                        source={image}
                                    />
                                    <View className='px-16 space-y-2 justify-center '>
                                        <Text>Vehicle Name</Text>
                                        <Text>Travel time</Text>
                                    </View>
                                </TouchableOpacity>
                        )
                    }}

                />

            </View>
        </View>


    )
}

export default RideOptionsCard