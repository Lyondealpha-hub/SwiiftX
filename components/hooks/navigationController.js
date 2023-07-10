
import { StatusBar } from "expo-status-bar";
import {View, Text, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "../navigaton/BottomNav";
import MyAppointments from "../pages/myappointmentsCompleted";
import MyAppointmentsNavigation from "../navigaton/MyAppointmentsNav";
import DoctorProfile from "../pages/doctorProfile";
import settings from "../pages/settings";
import Pharmacy from "../pages/pharmacy";
import Cart from "../pages/cart";
import SignUp from "../pages/signup";
import Login from "../pages/login";

const Stack = createNativeStackNavigator();

export default function NavigationController(){
    return(
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen options={{headerLargeTitle : false,headerShown: false, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: false, animation:'default'  }} name= 'SignUp' component={SignUp} />
                <Stack.Screen options={{headerLargeTitle : false,headerShown: false, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: false, animation:'default'  }} name= 'Login' component={Login} />
                <Stack.Screen options={{headerLargeTitle : false,headerShown: false, }} name= 'BottomTab' component={BottomNav} />
                <Stack.Screen options={{headerLargeTitle : true,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: true, animation:'default'  }} name= 'Appointments' component={MyAppointmentsNavigation} />
                <Stack.Screen options={{headerLargeTitle : false,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: true, animation:'default'  }} name= 'Doctor Profile' component={DoctorProfile} />
                <Stack.Screen options={{headerLargeTitle : false,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: false, animation:'default'  }} name= 'MyCart' component={Cart} />
                <Stack.Screen options={{headerLargeTitle : false,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:false, headerShadowVisible: true, animation:'default'  }} name= 'Pharmacy' component={Pharmacy} />
                <Stack.Screen options={{headerLargeTitle : true,headerShown: true, headerLargeTitleStyle:{fontSize:'28',fontWeight:'lighter'}, headerTransparent:true, headerShadowVisible: true, animation:'default'  }} name= 'Settings' component={settings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

