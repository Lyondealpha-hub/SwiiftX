import React from 'react';
import {View, Text, } from 'react-native';
import { Entypo, FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import personnel from '../../assets/personnel.png';


export const Profile = ()=>{

    const profile = [
        {id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation : 'Dentist, BSMMC Hospital', years: 3, cost:600},
    ]

    return(
        <View className='contianer h-screen'>
            {/* profile space */}
            <View className='container'>
                {/* Profile picture and name  */}
                <View className='container flex '>
                    <View className='w-2/6  justify-center items-center '>
                      <Image  className='justify-center items-center ' source={profile.image} />
                    </View>
                    {/* Name */}
                    <View className='justify-center items-center'>
                        <Text className='text-lg'>{profile.nam}e</Text>
                        <Text className='text-sm '>{profile.occupation}</Text>
                    </View>
                </View>

                {/* Doctor description  */}
                <View className='container bg-slate-300 flex'>
                    {/* Avalability */}
                    <View className='justify-center items-center border-r-slate-500'>
                        <Text>Availability</Text>

                    </View>

                    {/* Experience */}
                    <View className='justify-center items-center border-r-slate-500'>
                        <Text>Experience</Text>
                        <View className='container flex flex-row'>
                            <MaterialIcons name='history' size={20} />
                            <Text>{profile.years} Years</Text>
                        </View>
                    </View>

                    {/*Ratings  */}
                    <View className='justify-center items-center'>
                        <Text>Ratings</Text>
                    </View>

                </View>

            </View>
            {/* Profile settings */}

            <View className='container'>
                <View className='container flex items-center'>
                    <MaterialIcons name='local-activity' size={20} />
                    <Text>My Activity</Text>
                </View>

                <View className='container flex items-center'>
                    <MaterialIcons name='local-activity' size={20} />
                    <Text>Reminders</Text>
                </View>

                <View className='container flex items-center'>
                    <MaterialIcons name='local-activity' size={20} />
                    <Text>Add account</Text>
                </View>

                <View className='container flex items-center'>
                    <MaterialIcons name='local-activity' size={20} />
                    <Text>Invite friends via ...</Text>
                </View>

                <View className='container flex items-center'>
                    <MaterialIcons name='local-activity' size={20} />
                    <Text>Log out</Text>
                </View>

            </View>

        </View>
    )
}