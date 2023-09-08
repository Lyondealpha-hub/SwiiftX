import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import MyAppointmentsUpcomming from '../pages/myappointmentsUpcomming';
import MyAppointmentsCompleted from '../pages/myappointmentsCompleted';
import Chat from './screens/Chat';


const Tab = createMaterialTopTabNavigator();


export default function ChatNavigation() {


    return (

        <Tab.Navigator
            style={{
                marginTop: 30,
                backgroundColor: '#ffffff'
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                animationEnabled: true,
                tabBarActiveTintColor: '#e91e63',
                tabBarShowLabel: true,
                tabBarLabelStyle: { fontSize: '14px' },


                // tabBarStyle : {

                //     justifyContent: 'space-evenly',
                //     marginHorizontal : 10,
                //     alignItems : 'center',
                //     alignSelf: 'auto',
                //     height : 50,
                //     marginTop: 50,


                // },


                // tabBarIcon : ({focused, color, size})=>{
                //     let iconName;
                //     let rn = route.name


                //     if(rn === 'Chats'){
                //       iconName = focused ? 'home' : 'home-outline';
                //     }else if (rn === 'Calls'){
                //       iconName = focused ? 'newspaper' : 'newspaper-outline';
                //     }else if (rn === 'Recents'){
                //       iconName = focused ? 'car' : 'car';
                //     }


                //     return <Ionicons name={iconName} size={size} color={color} />
                //    }


            })}
        >
            <Tab.Screen name="Chats" component={Chat} options={{ tabBarLabel: 'Chats', }} />
            <Tab.Screen name="Calls" component={Chat} options={{ tabBarLabel: 'Calls' }} />
            <Tab.Screen name="Recents" component={Chat} options={{ tabBarLabel: 'Recents' }} />
        </Tab.Navigator>


    )
}