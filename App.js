import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import TopNav from './components/TopNav';

export default function App() {
  return (
    <View className='container h-screen absolute' >
      <TopNav />
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
