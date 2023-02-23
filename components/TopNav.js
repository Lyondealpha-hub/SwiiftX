import React from 'react'
import {  Text, View,Image } from 'react-native';
import user from '../assets/user.png'

export default function TopNav() {
  return (
    <View className='container flex flex-row  mt-9 justify-between items-center'>
        <View className='w-1/2 h-20 justify-start pl-4 items-center bg-green-700 flex flex-row'>
            <Image  className='justify-center items-center ' source={user} />
            <Text className=' items-center'>Hello Good Morning!</Text>
        </View>

        <View className='w-1/2 justify-end bg-yellow-400'>
            <Text>Login me here</Text>
        </View>
    </View>
  )
}
