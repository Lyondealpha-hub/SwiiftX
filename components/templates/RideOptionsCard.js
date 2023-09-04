import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import uber from '../../assets/uber.jpg'
import bike from '../../assets/bike.jpg'
import { useSelectedRide } from '../store/useSelectedRide'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {

    const { setGeneralValues } = useSelectedRide()
    const selectedRide = useSelectedRide((state) => state.selectedRide)
    const setTravelTimeInfo = useSelectedRide((state) => state.setTravelTimeInfo)

    const carsData = [
        {
            id: "Swiift-X-123",
            title: "SwiiftX",
            multiplier: 1,
            image: uber,
        },
        {
            id: "Swiift-XL-12",
            title: "SwiiftX bike",
            multiplier: 1.2,
            image: bike,
        },


    ]


    // if there is a SURGE pricing , this goes up

    const SURGE_CHANGE_RATE = 1.5


    return (
        <View className='container bg-white'>
            <View className=' flex-row justify-center items-center'>
                <Text className='p-2 text-xl italic '>Ride distance - {setTravelTimeInfo?.distance?.text}</Text>
            </View>

            <View>
                <FlatList
                    data={carsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image }, item }) => {

                        return (
                            <TouchableOpacity
                                className={`conatiner flex justify-between items-center flex-row p-1.5 ${id === selectedRide?.id && 'bg-gray-200'} `}
                                onPress={() => {
                                    setGeneralValues('selectedRide', item)
                                    console.log("ITEEM", item)
                                    setGeneralValues('deliveryDetails', { price: (setTravelTimeInfo?.duration?.value * SURGE_CHANGE_RATE * multiplier) / 100, time: setTravelTimeInfo?.duration?.text })

                                }}
                            >
                                <Image
                                    style={{
                                        width: 90,
                                        height: 90,
                                        resizeMode: "contain",
                                    }}
                                    source={image}
                                />
                                <View className='ml-4 '>
                                    <Text className='text-lg font-semibold'>{title}</Text>
                                    <Text>{setTravelTimeInfo?.duration?.text} Travel Time</Text>
                                </View>

                                <Text className='text-lg'>
                                    {/* price calculations based on travel time  */}
                                    {new Intl.NumberFormat('en-gb', {
                                        style: 'currency',
                                        currency: 'GHC',

                                    }).format(
                                        (setTravelTimeInfo?.duration?.value * SURGE_CHANGE_RATE * multiplier) / 100,

                                    )
                                        // {setGeneralValues('deliveryPrice', (setTravelTimeInfo?.duration?.value * SURGE_CHANGE_RATE * multiplier) / 100 )}


                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    }}

                />

            </View>
        </View>


    )
}

export default RideOptionsCard