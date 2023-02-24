import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View,Image,ImageBackground,ScrollView } from 'react-native';
import TopNav from './components/TopNav';
import user from './assets/user.png';
import doc from './assets/doc.jpg';
import doctor from './assets/doctor.png';
import checkup from './assets/medical-checkup.png';
import aid from './assets/first-aid.png';
import lab from './assets/lab.png';

export default function App() {
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
        <ScrollView horizontal={true} className='w-full' >
          <View className=' flex flex-row px-5  w-full'>
              <View className='w-1/4 px-5 bg-yellow-500'>
                <Image source={doctor}></Image>

              </View>

              <View className='w-1/4 px-5 bg-gray-500'>
                <Image source={checkup}></Image>
              </View>

              <View className='w-1/4 px-5 bg-purple-500'>
              <Image source={aid}></Image>
              </View>
              <View className='w-1/4 bg-green-500'>
              <Image source={lab}></Image>
              </View>

          

          </View>
        </ScrollView>
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
