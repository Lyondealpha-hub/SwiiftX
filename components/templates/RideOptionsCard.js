import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import uber from '../../assets/uber.jpg'
import bike from '../../assets/bike.jpg'
import { useSelectedRide } from '../store/useSelectedRide'

const RideOptionsCard = () => {

    const { setGeneralValues } = useSelectedRide()
    const selectedRide =  useSelectedRide((state)=>state.selectedRide)
    const setTravelTimeInfo = useSelectedRide((state)=>state.setTravelTimeInfo)

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
                <Text className='p-2 text-xl '>Select a Ride - {setTravelTimeInfo?.distance?.text}</Text>
            </View>

            <View>
                <FlatList
                    data={carsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image }, item }) => {
                        return (
                                <TouchableOpacity 
                                    className={`conatiner flex justify-between items-center flex-row p-2.5 ${id === selectedRide?.id && 'bg-gray-200'} `}
                                    onPress={()=>{
                                        setGeneralValues('selectedRide', item)
                                       
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 100,
                                            height: 100,
                                            resizeMode: "contain",
                                        }}
                                        source={image}
                                    />
                                    <View className='ml-6 '>
                                        <Text className='text-lg font-semibold'>{title}</Text>
                                        <Text>{setTravelTimeInfo?.duration?.text} Travel Time</Text>
                                    </View>

                                    <Text className='text-lg'>
                                        {/* price calculations based on travel time  */}
                                        {new Intl.NumberFormat('en-gb', {
                                            style: 'currency',
                                            currency:'GHC',
                                        
                                        }).format(
                                            (setTravelTimeInfo?.duration?.value * SURGE_CHANGE_RATE * multiplier) / 100
                                        )}
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