import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import personnel from './../../assets/personnel.png';
import doctor from './../../assets/doctor.png';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';



export default function MyAppointmentsUpcomming() {

  const appointments = [
    { id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation: 'Dentist, BSMMC Hospital', years: 3, cost: 600 },
    { id: 1, image: doctor, name: 'Dr. Misbahu Ahmed', occupation: 'Ghanacologist', years: 2, cost: 320 },
    { id: 2, image: doctor, name: 'Dr Nii Achomo', occupation: 'Surgeon', years: 7, cost: 1200 },
    { id: 3, image: personnel, name: 'Dr Osman', occupation: 'Cardiologist', years: 1, cost: 200 },
  ]

  return (
    <View className='container h-screen  mt-5 bg-slate-200'>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={true}  >
        <View className='container h-full px-2'>
          {
            appointments.map((doc, index) => {
              return (
                // Card design
                <View key={index} className='container h-40 mb-2 bg-white rounded-xl shadow-2xl '>
                  <View className='flex h-12 mb-0.5 justify-center items-center bg-purple-400 py-2 rounded-t-xl'>
                    <Text style={`${Platform.OS == "ios" && fontFamily.BHeading}`} className="text-white">Schediel tome and datyu here</Text>
                  </View>

                  {/* Profile */}
                  <View className='container flex flex-row'>
                    <View className='w-2/6  justify-center items-center '>
                      <Image className='justify-center items-center ' source={doc.image} />
                    </View>

                    {/* Content texts */}
                    <View className='w-4/6 justify-center '>
                      <Text style={`${Platform.OS == "ios" && fontFamily.BHeading}`} className='text-lg'>{doc.name} </Text>
                      <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className='text-sm '>{doc.occupation}</Text>
                    </View>
                  </View>
                  {/* reschedule & accp   */}
                  <View className='container p-1.5 flex flex-row justify-between items-center '>
                    <TouchableOpacity className='w-1/2 items-center flex flex-row justify-center'>
                      <MaterialIcons name='history' size={30} color={'purple'} />
                      <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className=' text-lg'>Rescheduled</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='w-1/2 items-center flex flex-row  justify-center'>
                      <MaterialIcons name='close' size={30} color={'red'} />
                      <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className='text-lg' >Accept</Text>
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