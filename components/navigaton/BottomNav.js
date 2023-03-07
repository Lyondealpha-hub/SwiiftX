import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
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
            height : 85

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
        <Tab.Screen name="Chat" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNav