import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import BottomNav from './components/navigaton/BottomNav';
import Profile from './components/Modals/sheets/profile';


export default function App() {
 
  return (
     
       <BottomNav />
      // <Profile />

        // {/* <StatusBar style="auto" />  */}
     
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
