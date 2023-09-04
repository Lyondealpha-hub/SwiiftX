import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import clock from '../../assets/clock1.png'
import pin from '../../assets/pin.png'
import { useNavigation } from '@react-navigation/native'
import { useSelectedRide } from '../store/useSelectedRide'
import { ScrollView } from 'react-native'
import prep from '../../assets/prep.jpeg'
import prep1 from '../../assets/prep1.png'
import prep2 from '../../assets/prep2.png'
import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheetComp } from '../templates/bottomSheet'

const Cart = () => {

    const navigation = useNavigation()
    const { rides, pickRide, setGeneralValues } = useSelectedRide();
    const zusStates = useSelectedRide((state) => state)
    const [isOpenBtmSheet, setisOpenBtmSheet] = useState(false)
    const [noItem, setNoItem] = useState(0)



    let Subtotal = 1

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

    const items = [
        { id: 0, label: 'Delivery Type', price: zusStates?.selectedRide?.title },
        { id: 1, label: 'Delivery fee', price: zusStates?.deliveryDetails?.price },
        { id: 2, label: 'Total', price: zusStates?.deliveryDetails?.price * Subtotal },

    ]

    // bottomSheet
    const list = [
        { title: 'Mobile money' },
        { title: 'Pay with cash' },

        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red', },
            titleStyle: { color: 'white' },
            onPress: () => { setisOpenBtmSheet(false); console.log('CALL OPENED') },
        },
    ];


    return (
        <View style={styles.container} className='container'>
            <BottomSheetComp isVisible={isOpenBtmSheet} list={list} />

            {/* Header */}
            <View style={styles.header}>
                <View className='flex flex-row justify-between py-5 px-3'>
                    {/* Total items and clear button */}
                    <View className='border-[1px] p-1 px-3 rounded-md flex-row justify-center items-center'>
                        <Text>{carsData.length} ITEMS </Text>
                    </View>
                    <TouchableOpacity className='border-[1px] p-1 px-3 rounded-md flex-row justify-center items-center'>
                        <Text className='text-sm'>Clear All</Text>
                    </TouchableOpacity>
                </View>
                <View className='continer flex flex-row '>
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
                                        <View className=' flex flex-row items-center  rounded-lg h-10  justify-evenly space-x-3'>
                                            <TouchableOpacity className='px-1 py-1 border-[1px] border-gray-300 rounded'   >
                                                <MaterialIcons name='remove' size={30} color='black' disabled={noItem <= 0 ? true : false} onPress={() => { setNoItem(noItem - 1) }} />
                                            </TouchableOpacity>


                                            <TextInput keyboardType={'number-pad'} focusable={true} className='text-2xl flex-row justify-center items-center'>{noItem}</TextInput>

                                            <TouchableOpacity className='px-1 py-1 border-[1px] border-gray-300 rounded' onPress={() => { setNoItem(noItem + 1) }}>
                                                <MaterialIcons name='add' size={30} color='black' />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            )
                        }}

                    />
                </View>

            </View>

            <View style={styles.footer} className='bg-purple-300 text-gray-700'>


                <View className='container  p-4'>
                    <View className='border-[1px] border-purple-200 rounded-xl  px-2.5 my-2'>
                        <ScrollView className='p-1'>
                            <Text className=" text-xl text-gray-00 font-semibold py-2.5">Delivery details</Text>
                            <View className=' space-y-0.5 h-20 rounded'>
                                <View className=' flex flex-row items-center  '>
                                    {/* icon here */}
                                    <Image source={clock} alt="timer" />
                                    <Text className=" text-sm px-1.5" >45 - {zusStates?.deliveryDetails?.time} </Text>
                                </View>
                                <TouchableOpacity onPress={() => { navigation.navigate('MapDirections') }} className='w-full flex flex-row justify-between'>
                                    <View className='w-1/2  flex flex-row items-center'>
                                        <Image source={pin} alt="loc" />
                                        <Text className=" text-base  py-1 px-1.5">Pick location</Text>
                                    </View>

                                    <View className='w-1/2 flex flex-row justify-end items-center '>
                                        <Text className='text-base '>{zusStates?.destinationD}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <Text className="text-gray-00 text-xl pt-2.5  pb-1 font-semibold ">Summary</Text>


                    {items.map(({ id, label, price }) => {
                        return (
                            <View key={id} className='container flex  flex-row justify-between p-0.5'>
                                <View>
                                    {id === 2 ? <Text className=' text-gray-600 text-base font-semibold py-1.5'>{label}</Text>
                                        :
                                        <Text className="  text-gray-600  text-sm">{label}</Text>
                                    }
                                </View>

                                <View>
                                    {id === 2 ? <Text className='text-gray-600 text-base  py-1.5'>GHC {price}</Text>
                                        :
                                        <Text className="text-gray-600 text-sm">{id === 0 ? "" : 'GHC'} {price}</Text>
                                    }
                                </View>

                            </View>
                        )
                    })}


                </View>


                {/* Checkout button */}
                <View className='container h-14   absolute px-5  inset-x-0 bottom-0  '>
                    <TouchableOpacity
                        onPress={() => {
                            pickRide(70);
                            setGeneralValues('Ahmed', 800)
                            console.log(zusStates.Ahmed)
                            setisOpenBtmSheet(true)
                        }}
                        className='w-full mx-auto h-12 flex flex-row justify-center items-center  bg-purple-600 rounded-xl' >
                        <Text className='text-white text-lg   justify-center items-center'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Cart


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 7,
        width: '100%',
        height: '100%',
    },

    footer: {
        flex: 7,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // backgroundColor: 'purple',

    },
})