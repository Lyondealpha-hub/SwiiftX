import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import erp from '../../../assets/erp.jpg'
import perp1 from '../../../assets/perp1.webp'
import prep from '../../../assets/prep.jpg'



export default function PharmacySheet(props) {
  return (
    <View style={styles.container}>
     
      {/* Header */}
      <View style={styles.header} className=''>
        <View style={{width:'100%', height:'100%'    }} className='flex flex-row justify-center py-4 ' >
            <Image style={{width:'100%', height:'100%'    }} className='flex flex-row justify-center items-center' source={prep}></Image> 
        </View>
      </View >

      <View style={styles.footer}>
        <View className='p-5'>
            <Text className='text-3xl'>Drug Name Here</Text>
            <Text>Number of tablets Here</Text>

        </View>

        <View className='container p-5 flex flex-row justify-between'>
            <View className=''>
                <Text>Adder Here </Text>
            </View>

            <View>
                <Text>Price here it multiplies based on adder</Text>
            </View>
        </View>

        <View className='p-5'>
            <Text>About Drug</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
        {/* Button */}
         
         <View className='flex flex-row justify-center items-center pt-28'>
            <TouchableOpacity className='py-5  px-20 bg-blue-600 rounded-xl' >
            <Text>Order for Delivery</Text>
            </TouchableOpacity>
         </View>

      </View>

         
    </View>
  );
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: '#fff',
       

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
        backgroundColor:'purple',
        
    },
})