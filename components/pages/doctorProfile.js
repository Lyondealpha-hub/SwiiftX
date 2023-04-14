import React from 'react';
import { View, Text, Image} from 'react-native';
import personnel from '../../assets/personnel.png'
import { MaterialIcons } from '@expo/vector-icons';



export default function DoctorProfile(){

   

    return (
        <View className='container h-screen '>

            <View className='container mt-4'>
                {/* Profile space */}
                <View className='container p-5 '>
                    <View className='continer  justify-center items-center '>
                        <Image  className='justify-center items-center ' source={personnel} />
                    </View>
                    {/* Name */}
                    <View className='justify-center items-center'>
                        <View className='container flex flex-row justify-center items-center'>
                            <Text className='text-lg px-2'>Dr. Afrane Aykire</Text>
                            <MaterialIcons name='verified' size={20} color={'purple'} />
                        </View>
                        <Text className='text-sm '>Dentist, BSMMC Hospital</Text>
                    </View>
                </View>

                <View className='container h-28 bg-slate-300 flex flex-row justify-evenly py-5'>
                    {/* Avalability */}
                    <View className=' w-1/3 h-10 items-center border-r-2 px-2 border-r-slate-500'>
                        <Text>Availability</Text>
                        <View className='w-full h-full flex flex-row px-2 justify-evenly items-center '>
                            <MaterialIcons className='' name='history' size={20} />
                            <Text >Mon - Sun</Text>
                        </View>

                        <Text className='text-xs container justify-center items-center'>9:30 AM -4:00 PM </Text>

                    </View>

                    {/* Experience */}
                    <View className='w-1/3 items-center border-r-2 px-2 border-r-slate-500'>
                        <Text>Experience</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='analytics' size={20} />
                            <Text >6 Years</Text>
                        </View>
                    </View>

                    {/*Ratings  */}
                    <View className='w-1/3  items-center'>
                        <Text>Ratings</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='star' size={20} />
                            <Text >6 Years</Text>
                        </View>
                    </View>

                </View>

                <Text>About</Text>

                <View className='justify-center items-center'>
                    <Text>
                        Lorem ipsum is placeholder text commonly used 
                        in the graphic, print, and publishing industries for previewing 
                        layouts and visual mockups.Lorem ipsum dolor sit amet, consectetur adipiscing 
                       
                    </Text>
                </View>
            </View>


            {/* <View className='justify-end'>
                <View className='container flex flex-row justify-between items-end'>
                    <View>
                        <Text>Consultation Fees</Text>
                    </View>

                    <View>
                        <Text>GHC 500</Text>
                    </View>

                </View>
            </View> */}

            

        </View>
    )
}