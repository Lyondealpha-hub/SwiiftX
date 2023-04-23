import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import TopNav from '../navigaton/reusable/TopNav'
import { Stack, Surface,Box, Wrap } from '@react-native-material/core'

export default function Pharmacy() {

    // Categories
  const categories = [
    {id: 0 , image: 'doctor', text: 'Doctor'},
    {id: 1 , image: 'checkup', text: 'Checkup'},
    {id: 2 , image: 'lab', text: 'Lab'},
    {id: 3 , image: 'aid', text: 'Pharmacy'},
    {id: 3 , image: 'aid', text: 'Pharmacy'},
    {id: 3 , image: 'aid', text: 'Pharmacy'},
    {id: 3 , image: 'aid', text: 'Pharmacy'},
    {id: 3 , image: 'aid', text: 'Pharmacy'},

  ]


  return (
    <View className='container '>
        <TopNav />
        <View>
            <Text className='text-2xl px-3'>Stores</Text>
        </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='container ' >
          <View className='container flex flex-row px-2 justify-center items-center my-5'>
              
                {categories.map((cat,index)=>{
                  return (
                    
                        <View key={index} className=' p-5 bg-white mx-1 justify-evenly items-center rounded-md shadow-2xl '>
                            <TouchableOpacity className=' items-center '>
                                {/* <Image className='justify-center items-center ' source={cat.image}></Image> */}
                                <Text className='items-center'>{cat.text}</Text>
                            </TouchableOpacity>
                        </View>
                   
                  )
                })}
          </View>
        </ScrollView>

        <ScrollView>
            <View className=' flex flex-row flex-wrap '>
                {categories.map((cat,index)=>{
                  return (
                    
                      
                    
                            <Surface elevation={6} style={{marginHorizontal: 5, marginVertical: 5}} >
                            <Wrap shouldWrapChildren={true} m={4} className='container'>
                               <TouchableOpacity className=' items-center ' style={{width:190, height:230    }}>
                                 <Image className='justify-center items-center ' source={cat.image}></Image> 
                                 <Text className='items-center'>{cat.text}</Text>
                            </TouchableOpacity> 
                            </Wrap>
                            {/* <View key={index} className='p-16 bg-white mx-1.5 justify-evenly items-center '>
                            
                        {/* // </View>  */}
                        </Surface>
                         
                       

                   
                  )
                })}

            </View>
        </ScrollView>
    </View>
  )
}