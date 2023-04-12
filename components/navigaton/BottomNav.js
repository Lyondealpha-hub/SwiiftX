import * as React from 'react'
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Chat from './screens/Chat';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route})=>({
          headerShown : false,
          tabBarStyle : {
            alignItems : 'center',
            alignSelf : 'baseline',
            height : 85,
            elevation : 3,
            shadowColor : 0,
            shadowOffset :{width: 0, height: 2},
            shadowRadius : 2


          },
          
          tabBarIcon : ({focused, color, size})=>{
            let iconName;
            let rn = route.name
            

            if(rn === 'Home'){
              iconName = focused ? 'home' : 'home-outline';
            }else if (rn === 'News'){
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }else if (rn === '911'){
              iconName = focused ? 'car' : 'car';
            }else if (rn === 'Chat'){
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              
              
            }

            return <Ionicons name={iconName} size={size} color={color} />
           }

        })}

      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="News" component={Home} />
        <Tab.Screen name="911" component={Home} />
        <Tab.Screen options={{
          headerShown:true , 
          
         
          }} 
            name="Chat" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNav