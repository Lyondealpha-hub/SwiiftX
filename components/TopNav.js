import React from 'react'
import {  Text, View,Image, TextInput, StyleSheet } from 'react-native';
import user from '../assets/user.png'
import settings_cog from '../assets/settings-cog.png';
import cart from '../assets/shopping-cart.png';
import notification from '../assets/bell.png';
import search from '../assets/search.png';

import { Entypo, FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopNav() {
  return (
    <View>
      <View className='container flex flex-row  mt-9 justify-between items-center'>
        <View className='w-1/2  justify-start pl-4 items-center  flex flex-row'>
            <Image  className='justify-center items-center ' source={user} />
            {/* <Text className=' items-center'>Hello Good Morning!</Text> */}
        </View>

        <View className='w-1/2 justify-end flex flex-row '>
          <View className='w-3/5 justify-evenly flex flex-row '>
            <Image  className='justify-center items-center ' source={notification} />
            <Image  className='justify-center items-center ' source={cart} />
            <Image  className='justify-center items-center ' source={settings_cog} />
           
          </View>
           
        </View>
    </View>
    {/* Search bar  */}
    <View className='contianer px-3 py-2 flex flex-row'>
      <TextInput className='w-full h-10 border-2 rounded-2xl bg-slate-300 italic px-3' placeholder={'Search here'} > </TextInput>
      <Image style={navStyles.search_icon}  className='justify-center items-center' source={search} />
    </View>
    </View>
  )
}


const navStyles = StyleSheet.create({
  search_icon: {
    marginHorizontal:-45,
    marginTop: 7,
    
  },
})
