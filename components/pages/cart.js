import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {  } from 'react-native-gesture-handler'

const Cart = () => {

    const items = [
        {id: 0, name: 'John', price: 200},
        {id: 1, name: 'John', price: 200},
        {id: 2, name: 'John', price: 200},
        {id: 3, name: 'John', price: 200},
        {id: 4, name: 'John', price: 200},
        {id: 5, name: 'John', price: 200},
        {id: 6, name: 'John', price: 200},
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
            <View  className='container flex flex-row justify-between p-8'>
                <View>
                    <Text className='text-xl text-white'>Checkout</Text>
                </View>
                <View >
                    <Text className='text-lg text-white'>GHC 5</Text>
                </View>
            </View>
            
            {/* Checkout button */}
            <View className='w-full flex flex-row justify-center items-center pt-5 px-10'>
                <TouchableOpacity className='w-full h-12 flex flex-row justify-center items-center  bg-blue-600 rounded-xl' >
                    <Text className='text-white text-lg   justify-center items-center'>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Cart


const styles = StyleSheet.create({
    container :{
        flex : 1,
    },

    header : {
        flex: 7,
        width:'100%',
        height:'100%',
    },

    footer :{
        flex: 2,
         borderTopLeftRadius: 45,
            borderTopRightRadius: 45,
        backgroundColor:'purple',
        
    },
})