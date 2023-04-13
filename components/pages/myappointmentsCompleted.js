import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import personnel from './../../assets/personnel.png';
import doctor from './../../assets/doctor.png';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';



export default function MyAppointmentsCompleted(){

    const appointments = [
        {id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation : 'Dentist, BSMMC Hospital', years: 3, cost:600},
        {id: 1, image: doctor, name: 'Dr. Misbahu Ahmed', occupation : 'Ghanacologist', years: 2, cost:320},
        {id: 2, image: doctor, name: 'Dr Nii Achomo', occupation : 'Surgeon', years: 7, cost:1200},
        {id: 3, image: personnel, name: 'Dr Osman', occupation : 'Cardiologist', years: 1, cost:200},
      ]

    return(
        <View className='container h-screen  mt-5 bg-white'>
            <ScrollView  showsVerticalScrollIndicator={false}  alwaysBounceVertical={true}  >
          <View className='container h-full px-3'> 
          {
            appointments.map((doc, index)=>{
              return(
                // Card design
                  <View key={index} className='container h-40 p-1 mb-2 bg-white rounded-3xl shadow-2xl '>
                    <View className='flex justify-center items-center bg-purple-600 py-2 rounded-t-3xl'>
                        <Text>Schediel tome and datyu here</Text>
                    </View>
                    
                    {/* Profile */}
                    <View className='container flex flex-row'>
                        <View className='w-2/6  justify-center items-center '>
                            <Image  className='justify-center items-center ' source={doc.image} />
                        </View>

                        {/* Content texts */}
                        <View className='w-4/6 justify-center '>
                            <Text className='text-lg'>{doc.name} </Text>
                            <Text className='text-sm '>{doc.occupation}</Text>
                        </View>
                    </View>
                    {/* reschedule & accp   */}
                    <View className='container p-1.5 flex flex-row justify-between items-center '>
                        <TouchableOpacity className='w-1/2 items-center flex flex-row justify-center'>
                            <MaterialIcons name='view-headline' size={30} color={'purple'} />
                            <Text className=' text-lg'>View</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className='w-1/2 items-center flex flex-row  justify-center'>
                            <MaterialIcons name='verified' size={30} color={'blue'} />
                          <Text className='text-lg' >Completed</Text>
                        </TouchableOpacity>

                      </View>


                  </View>
              )
            })
          }
          </View>
          </ScrollView>
        </View>
    )
}