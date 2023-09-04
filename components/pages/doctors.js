import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, FlatList, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AirbnbRating, Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import doc from '../../assets/doc.jpg';
import personnel from '../../assets/personnel.png';
import doctor from '../../assets/doctor.png';
import { Entypo, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';





export default function Doctors() {

    const navigation = useNavigation()

    const doctors = [
        { id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation: 'Dentist, BSMMC Hospital', years: 3, cost: 600, },
        { id: 1, image: doctor, name: 'Dr. Misbahu Ahmed', occupation: 'Gynaecologist', years: 2, cost: 320, },
        { id: 2, image: doctor, name: 'Dr Nii Achomo', occupation: 'Surgeon', years: 7, cost: 1200, },
        { id: 3, image: personnel, name: 'Dr Osman', occupation: 'Cardiologist', years: 1, cost: 200, },
    ]

    const rating = ['1', '2.5', '3.5', '4.8', '5',]



    return (
        <View className='container '>
            <View className='container h-[30%]'>
                <ImageBackground resizeMode='cover' source={doc} className='h-full flex  flex-row  mx-2 rounded-3xl py-1 '>
                    <View className='w-4/5 justify-center px-3'>
                        <Text className='text-xl  text-white items-center flex-wrap-reverse'>Looking For Specialist Doctor?</Text>
                        <Text className='text-white'>Join with an Online consultation</Text>
                    </View>

                </ImageBackground>
            </View>

            <View className='container flex flex-row  '>
                <FlatList
                    data={doctors}
                    keyExtractor={(item) => item.id}
                    renderItem={({ id, name, occupation, years, cost, image }) => {
                        return (
                            <TouchableOpacity key={id} onPress={() => { navigation.navigate('Doctor Profile') }} className='container h-32 flex  flex-row mb-2 bg-white rounded-lg shadow-2xl '>
                                {/* Profile */}
                                <View className='w-2/6  justify-center items-center '>
                                    <Image className='justify-center items-center ' source={image} />
                                </View>
                                {/* Content texts */}
                                <View className='w-4/6 justify-center '>
                                    <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className='text-lg'>{name} </Text>
                                    <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className='text-sm '>{occupation}</Text>
                                    {/* Rating and years in feild  */}
                                    <View className='w-full flex flex-row justify-between items-center '>
                                        {/* <Rating showRating  type='heart' ratingCount={3} imageSize={20} /> */}
                                        <View className='w-1/2 flex flex-row items-center'>
                                            <MaterialIcons name='history' size={22} />
                                            <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className='px-1'>{years} Years</Text>
                                        </View>
                                        {/* <Rating  imageSize={10} readonly={true} showRating={true}  showReadOnlyText={false} ratingCount={3} fractions={1} jumpValue={0.5}  className='flex-row-reverse text-xs' /> */}
                                        {/* <Text>10Yrs</Text> */}
                                        <View className='w-1/2'>
                                            <AirbnbRating size={15} showRating={true} ratingContainerStyle={{ flexDirection: 'row-reverse' }} reviews={rating} reviewSize={13} count={3} isDisabled={true} />
                                        </View>
                                        {/* <AirbnbRating starImage={year}  size={30} showRating={false}  ratingContainerStyle={{flexDirection: 'row-reverse',}} reviews={rating}  reviewSize={10} count={1}  isDisabled={true} /> */}
                                    </View>
                                    {/* cost & button   */}
                                    <View className=' flex flex-row justify-between items-center '>
                                        <Text className='w-2/5 justify-start'>Cost: ${cost}</Text>
                                        <TouchableOpacity className='w-3/5 justify-end '>
                                            <Text style={`${Platform.OS == "ios" && fontFamily.semiBHeading}`} className='px-0.5' onPress={() => { navigation.navigate('Doctor Profile') }} >Book Appointment</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )
                    }}

                />
            </View>

        </View >
    )
}


const fontFamily = StyleSheet.create({
    mediumHeading: {
        fontFamily: 'AppleSDGothicNeo-Medium',
    },
    semiBHeading: {
        fontFamily: 'AppleSDGothicNeo-SemiBold',
    },
    BHeading: {
        fontFamily: 'AppleSDGothicNeo-Bold',
    }
})