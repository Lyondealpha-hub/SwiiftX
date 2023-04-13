import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import BottomNav from './components/navigaton/BottomNav';
import Profile from './components/Modals/sheets/profile';
import NavigationController from './components/hooks/navigationController';


export default function App() {
 
  return (
     
    <View className='container h-screen '>
       <StatusBar style="auto"  />
          <NavigationController />

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
