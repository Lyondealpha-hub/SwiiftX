import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {  Text, View,Image, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import user from '../../../assets/user.png';
import settings_cog from '../../../assets/settings-cog.png';
import cart from '../../../assets/shopping-cart.png';
import notification from '../../../assets/bell.png';
import search from '../../../assets/search.png';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import UserProfileModal from '../../Modals/userModal';



export default function TopNav() {
  const navigation = useNavigation()

  const [openProfile, setOpenProfile] = useState(false)
  



  return (
    <View className='mt-2'>
      <View className='container flex flex-row   justify-between items-center'>
        <TouchableOpacity className='w-1/2  justify-start pl-4 items-center  flex flex-row' onPress={()=>{setOpenProfile(true)}}>
            <Image  className='justify-center items-center ' source={user} />
            {/* <Text className=' items-center'>Hello Good Morning!</Text> */}
        </TouchableOpacity>

        <View className='w-1/2 justify-end flex flex-row '>
          <View className='w-3/5 justify-evenly flex flex-row '>
            <Image  className='justify-center items-center ' source={notification} />
            <Image  className='justify-center items-center ' source={cart} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
              <Image  className='justify-center items-center ' source={settings_cog} />
            </TouchableOpacity>
           
          </View>
           
        </View>
    </View>
    {/* Search bar  */}
    <View className='contianer px-3 py-2 flex flex-row'>
      <TextInput style={{borderStyle: 'solid', borderWidth:'1px'}} className='w-full h-10 justify-center rounded-2xl px-3 text-base items-center' placeholder={'Search here'} > </TextInput>
      <Image style={navStyles.search_icon}  className='justify-center items-center' source={search} />
    </View>


    <UserProfileModal openProfile={openProfile} setOpenProfile={setOpenProfile}  />

    </View>
  )
}


const navStyles = StyleSheet.create({
  search_icon: {
    marginHorizontal:-45,
    marginTop: 7,
    
    
  },
})
