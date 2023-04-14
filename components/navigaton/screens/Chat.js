import React from 'react'
import {  Text, View,Image,StyleSheet,ScrollView, TouchableOpacity, TextInput, Pressable, FlatList } from 'react-native';
import { Entypo, FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import search from '../../../assets/search.png';

export default function Chat () {
    const navigation = useNavigation()

    const CusMessages = [
        {
            id:1,
            userName: 'Dr. Ahmed Misbahu',
            userImg: <MaterialIcons name='account-circle' size={70} color={'green'} />,
            messageTime: '4 hours ago',
            messageText: "Hey there this is a test for a message chat in this application will have to later save all these in an ayncstorage"
        
        },
        {
            id:2,
            userName: 'Dr. Afrane Aykire',
            userImg: <MaterialIcons name='account-circle' size={70} color={'green'} />,
            messageTime: '6 hours ago',
            messageText: "Hey there this is a test for a message chat in this application will have to later save all these in an ayncstorage"
        
        }

    ]


    return(
        <View className="container h-full mt-3 " >
             {/* Search bar  */}
            <View className='container px-2 flex flex-row '>
                <TextInput className='container border-2 h-10 rounded-2xl px-3 text-base items-center'  placeholder={'Search here'}></TextInput>
                <Image style={navStyles.search_icon}  className='justify-center items-center' source={search} />
            </View>
            <FlatList 
                data={CusMessages}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={()=>{navigation.navigate('Messages',{userName: item.userName})}} className='container' >
                        <View style={navStyles.card_border} className='flex flex-row justify-between px-2'>
                            <View  className='py-7'>
                                {item.userImg}
                            </View>
                            <View className='flex-col justify-center p-1 ml-2 w-80 border-opacity-5 border-slate-100'>
                            <View className='flex flex-row justify-between mb-2'>
                                    <Text>{item.userName}</Text>
                                    <Text>{item.messageTime}</Text>
                            </View>
                            <Text>{item.messageText}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

    </View>
    )


}

const navStyles = StyleSheet.create({
    search_icon: {
      marginHorizontal:-45,
      marginTop: 7,
      
    },

    card_border:{
        borderBottomWidth : 0.5,
        
    }
  })