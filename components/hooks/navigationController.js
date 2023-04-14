
import { StatusBar } from "expo-status-bar";
import {View, Text, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "../navigaton/BottomNav";
import MyAppointments from "../pages/myappointmentsCompleted";
import MyAppointmentsNavigation from "../navigaton/MyAppointmentsNav";
import DoctorProfile from "../pages/doctorProfile";

const Stack = createNativeStackNavigator();

export default function NavigationController(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerLargeTitle : false,headerShown: false }} name= 'BottomTab' component={BottomNav} />
                <Stack.Screen options={{headerLargeTitle : true,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: true, animation:'default'  }} name= 'Appointments' component={MyAppointmentsNavigation} />
                <Stack.Screen options={{headerLargeTitle : false,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: true, animation:'default'  }} name= 'Doctor Profile' component={DoctorProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

