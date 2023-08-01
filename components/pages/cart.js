import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import clock from '../../assets/clock1.png'
import pin from '../../assets/pin.png'

const Cart = () => {

    const items = [
        { id: 0, label: 'Subtotal', price: 200 },
        { id: 1, label: 'Delivery fee', price: 200 },
        { id: 2, label: 'Total', price: 200 },

    ]




    return (
        <View style={styles.container} className='container'>
            {/* Header */}
            <View style={styles.header}>
                <View className='flex flex-row justify-between p-5'>
                    {/* Total items and clear button */}
                    <View>
                        <Text>6 ITEMS </Text>
                    </View>
                    <TouchableOpacity>
                        <Text>Clear All</Text>
                    </TouchableOpacity>
                </View>
                <View className='continer flex flex-row '>
                    {/* Image */}
                    <View></View>
                    {/* details + counter */}
                    <View></View>
                    {/* delete icon */}
                    <View></View>
                </View>

            </View>

            <View style={styles.footer}>

                <View className='container  px-6 py-4'>
                    <Text className="text-white text-xl py-2.5 font-semibold">Delivery details</Text>
                    <View className='container space-y-1'>
                        <View className='container flex flex-row items-center  '>
                            {/* icon here */}
                            <Image source={clock} alt="timer" />
                            <Text className="text-white text-sm px-2.5" >30 - 45 mins</Text>
                        </View>
                        <TouchableOpacity className='container flex flex-row justify-between'>
                            <View className=' flex flex-row items-center'>
                                <Image source={pin} alt="timer" />
                                <Text className="text-white text-lg py-1 px-2.5">Choose location</Text>
                            </View>

                            <View className='flex flex-row justify-end items-center'>
                                <Text className='text-lg text-white'>Location here</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text className="text-white text-xl pt-2.5  pb-1 font-semibold ">Summary</Text>


                    {items.map(({ id, label, price }) => {
                        return (
                            <View key={id} className='container flex  flex-row justify-between p-0.5'>
                                <View>
                                    {id === 2 ? <Text className='text-white text-base font-semibold py-1.5'>{label}</Text>
                                        :
                                        <Text className="text-white text-sm">{label}</Text>
                                    }
                                </View>

                                <View>
                                    {id === 2 ? <Text className='text-white text-base font-semibold py-1.5'>GHC {price * 2}</Text>
                                        :
                                        <Text className="text-white text-sm">GHC {price}</Text>
                                    }
                                </View>

                            </View>
                        )
                    })}


                </View>

                {/* Checkout button */}
                <View className='container h-14   absolute px-5  inset-x-0 bottom-0  '>
                    <TouchableOpacity className='w-full mx-auto h-12 flex flex-row justify-center items-center  bg-purple-400 rounded-xl' >
                        <Text className='text-white text-lg   justify-center items-center'>Checkout</Text>
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
        flex: 5,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        backgroundColor: 'purple',

    },
})