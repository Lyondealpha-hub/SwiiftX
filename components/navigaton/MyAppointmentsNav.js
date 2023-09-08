import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import MyAppointmentsUpcomming from '../pages/myappointmentsUpcomming';
import MyAppointmentsCompleted from '../pages/myappointmentsCompleted';


const Tab = createMaterialTopTabNavigator();


export default function MyAppointmentsNavigation() {


  return (

    <Tab.Navigator
      className="container"
      initialRouteName='Upcomming'

      tabBarOptions={({ route }) => ({
        headerShown: true,
        animationEnabled: true,
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: '20px' },

        tabBarStyle: {

          justifyContent: 'space-evenly',
          marginHorizontal: 10,
          alignItems: 'center',
          alignSelf: 'auto',
          height: 50,


        },


        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name


          if (rn === 'Upcomming') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Completed') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (rn === 'Rescheduled') {
            iconName = focused ? 'car' : 'car';
          }


          return <Ionicons name={iconName} size={size} color={color} />
        }


      })}
    >
      <Tab.Screen name="Upcomming" component={MyAppointmentsUpcomming} options={{ tabBarLabel: 'Upcomming', }} />
      <Tab.Screen name="Completed" component={MyAppointmentsCompleted} options={{ tabBarLabel: 'Completed' }} />
      <Tab.Screen name="Rescheduled" component={Home} options={{ tabBarLabel: 'Rescheduled' }} />
    </Tab.Navigator>

  )
}