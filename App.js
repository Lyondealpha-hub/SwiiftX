import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import BottomNav from './components/navigaton/BottomNav';
import Profile from './components/Modals/sheets/profile';
import NavigationController from './components/hooks/navigationController';
import SignUp from './components/pages/signup';
import ProfileEdit from './components/pages/profileEdit';


export default function App() {
 
  return (
     
    <SafeAreaView>
      <View  className='container h-full '>
       <StatusBar style="auto"  />
         
           {/* <NavigationController /> */}
          <ProfileEdit />

  </View>
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
