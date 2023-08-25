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
        <View>
            <View>
                <Text className='container flex flex-row justify-center bg-red-500 items-center text-xl '>Select a Ride</Text>
            </View>

            <View>
                <FlatList
                    data={carsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image } }) => {
                        return (
                            <TouchableOpacity>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: "contain",
                                    }}
                                    source={image}
                                />
                            </TouchableOpacity>
                        )
                    }}

                />
                
            </View>
        </View>


    )
}

export default RideOptionsCard