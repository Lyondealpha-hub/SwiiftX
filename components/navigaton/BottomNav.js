import * as React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Chat from './screens/Chat';
import MyAppointmentsNavigation from './MyAppointmentsNav'
import { Ionicons } from '@expo/vector-icons';
import ChatNavigation from './ChatNav';


const Tab = createBottomTabNavigator();

function BottomNav() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          alignItems: 'center',
          alignSelf: 'baseline',
          height: '6%',
          elevation: 6,
          shadowColor: 0,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 2


        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name


          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Appointments') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (rn === 'Orders') {
            iconName = focused ? 'car' : 'car';
          } else if (rn === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';


          }

          return <Ionicons name={iconName} size={size} color={color} />
        }

      })}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Appointments" component={MyAppointmentsNavigation} />
      <Tab.Screen name="Orders" component={Home} />
      <Tab.Screen name="Chat" component={ChatNavigation} />
    </Tab.Navigator>

  )
}

export default BottomNav