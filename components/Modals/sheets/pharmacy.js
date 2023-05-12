import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import erp from '../../../assets/erp.jpg'
import perp1 from '../../../assets/perp1.webp'
import prep from '../../../assets/prep.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';



export default function PharmacySheet(props) {

    const [noItem, setNoItem] = useState(0)

    const linearGradient_colors = ["#FC466B","#3F5EFB"]

  return (
    <View style={styles.container} className=''>
     
      {/* Header */}
      <View style={styles.header} className=''>
        <View style={{width:'100%', height:'100%'    }} className='flex flex-row justify-center py-4   ' >
            <Image style={{width:'100%', height:'100%'    }} className='flex flex-row justify-center items-center ' source={prep}></Image> 
        </View>
      </View >

      <View style={styles.footer} className='' >
        <LinearGradient colors={linearGradient_colors} className='h-full'>
        <View className='p-5'>
            <Text className='text-3xl'>Drug Name Here</Text>
            <Text className='text-lg py-2'>Number of tablets Here</Text>

        </View>

        <View className='container p-2 flex flex-row justify-between'>
            <View style={{borderWidth:'1px'}} className='w-1/2 flex flex-row items-center  rounded-lg h-14  justify-center'>
                <TouchableOpacity className='px-5' onPress={()=>{setNoItem(noItem + 1)}}>
                    <MaterialIcons  name='add' size={30} color='black'  />
                </TouchableOpacity>

                <TextInput className='text-2xl'>{noItem}</TextInput>

                <TouchableOpacity className='px-5'   >
                    <MaterialIcons name='remove' size={30} color='black' disabled={noItem <=0 ? true : false} onPress={()=>{setNoItem(noItem - 1)}}  />
                </TouchableOpacity>
            </View>

            <View className='w-1/2 justify-center items-center'>
                <Text className='text-2xl' > GHC </Text>
            </View>
        </View>

        <View className='p-5'>
            <Text>About Drug</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
        {/* Button */}
         
         <View className='flex flex-row justify-center items-center pt-16'>
            <TouchableOpacity className='py-5  px-20 bg-blue-600 rounded-xl' >
            <Text className='text-white'>Order for Delivery</Text>
            </TouchableOpacity>
         </View>
        </LinearGradient>

      </View>

         
    </View>
  );
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
    },

    header : {
        flex: 3,
        width:'100%',
        height:'100%',
    },

    footer :{
        flex: 5,
         borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        // backgroundColor:'white',
        
    },
})