import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View,Image,ImageBackground,ScrollView, TouchableOpacity, Button, Pressable } from 'react-native';
import TopNav from './components/TopNav';
import user from './assets/user.png';
import doc from './assets/doc.jpg';
import doctor from './assets/doctor.png';
import personnel from './assets/personnel.png';
import checkup from './assets/medical-checkup.png';
import aid from './assets/first-aid.png';
import lab from './assets/lab.png';
import { Rating } from 'react-native-ratings';


export default function App() {
  // Categories

  const categories = [
    {id: 0 , image: doctor, text: 'Doctor'},
    {id: 1 , image: checkup, text: 'Checkup'},
    {id: 2 , image: lab, text: 'Lab'},
    {id: 3 , image: aid, text: 'Medicine'},

  ]
  return (
    <View className='container h-screen absolute' >
      <TopNav />
      {/* Image render */}
      <View className='contianer h-1/6'>
        <ImageBackground resizeMode='cover' source={doc}  className='h-full flex  flex-row  mx-5 rounded-3xl py-1 '>
          <View className='w-4/5 justify-center px-3'>
            <Text className='text-xl  text-white items-center flex-wrap-reverse'>Looking For Specialist Doctor?</Text>
            <Text className='text-white'>Join with an Online consultation</Text>
          </View>
        {/* <View className='w-2/5 items-end'>
        <Image  className='justify-center items-center ' source={user} />
        </View> */}
        </ImageBackground>
      </View>
      {/* Category */}
      <View className='w-full '>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='container ' >
          <View className=' flex flex-row px-2  w-full'>
              
                {categories.map((cat,index)=>{
                  return (
                    <View key={index} className='w-1/4  px-5 justify-center items-center rounded-md '>
                      <TouchableOpacity className='items-center'>
                        <Image className='justify-center items-center ' source={cat.image}></Image>
                        <Text>{cat.text}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                })}
                


          </View>
        </ScrollView>
      </View>
      {/* Featured Doctors */}
      <View className='contianer justify-center items-center px-3 bg-blue-800  '>
        {/* header */}
        <Text>Features Doctors</Text>
        {/* Body cards Contents */}
        <View className='container h-32 flex flex-row mb-2 bg-white rounded-3xl  '>
          {/* Profile */}
          <View className='w-2/6  justify-center items-center '>
            <Image  className='justify-center items-center ' source={personnel} />
          </View>

          {/* Content texts */}
          <View className='4/6 justify-center'>
            <Text className='text-xl'>Dr. Afrane Aykire </Text>
            <Text className='text-base'>Dentist, BSMMC Hospital</Text>
              {/* Rating and years in feild  */}
              <View className=' flex flex-row justify-between items-center '>
                {/* <Rating showRating  type='heart' ratingCount={3} imageSize={20} /> */}
                
                  <Text>10Yrs</Text>
                

            </View>

            {/* cost & button   */}
            <View className=' flex flex-row justify-between items-center '>
              <Text className='justify-start'>Per Season: $400</Text>
              <TouchableOpacity className='justify-end ml-2'>
                <Text>Appointment</Text>
              </TouchableOpacity>

            </View>
          </View>


        </View>

      </View>
      <View className='flex-1 justify-center items-center  bg-red-500' >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Oh yeah you there! </Text>
      </View>
       
      <StatusBar style="auto" /> 
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
