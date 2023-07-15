import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TopNav from '../navigaton/reusable/TopNav'
import { Stack, Surface,Box, Wrap } from '@react-native-material/core'
import erp from '../../assets/erp.jpg'
import perp1 from '../../assets/perp1.webp'
import prep from '../../assets/prep.jpg'
import cart from '../../assets/shopping-cart.png'
import { useNavigation } from '@react-navigation/native'
import PharmacyModal from '../Modals/pharmacyModal'

export default function Pharmacy() {

  const navigation = useNavigation()
  const [openModal, setOpenModal] = useState(false)

    // Categories
  const categories = [
    {id: 0 , image: 'Antiemetics', text: 'Blood products'},
    {id: 1 , image: 'checkup', text: 'Contraceptives'},
    {id: 2 , image: 'lab', text: 'Antimigraine agents'},
    {id: 3 , image: 'aid', text: 'Antimycobacterials'},
  

  ]

  const products = [
    {id: 0 , image: erp, text: 'Doctor',price: 30.00, buy: cart},
    {id: 1 , image: perp1, text: 'Checkup',price: 30.00, buy: cart},
    {id: 2 , image: prep, text: 'Lab',price: 30.00, buy: cart},
    {id: 3 , image: erp, text: 'Pharmacy',price: 30.00, buy: cart},
    {id: 4 , image: perp1, text: 'Pharmacy',price: 30.00, buy: cart},
    {id: 5 , image: prep, text: 'Pharmacy',price: 30.00, buy: cart},
    {id: 6 , image: erp, text: 'Pharmacy',price: 30.00, buy: cart},
    {id: 7 , image: perp1, text: 'Pharmacy',price: 30.00, buy: cart},

  ]


  return (
    <View className='container '>
        <TopNav isSearch={true} />
        <View className='container'>
            <Text className='text-2xl px-3'>Categories</Text>
        </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='container my-5 ' >
          <View className='container flex flex-row px-2 justify-center items-center '>
              
                {categories.map((cat,index)=>{
                  return (
                    
                        <View key={index} className=' p-3 bg-white mx-1 justify-evenly items-center rounded-md shadow-2xl '>
                            <TouchableOpacity className=' h-10 w-25 justify-center items-center '>
                                {/* <Image className='justify-center items-center ' source={cat.image}></Image> */}
                                <Text className='justify-center items-center'>{cat.text}</Text>
                            </TouchableOpacity>
                        </View>
                   
                  )
                })}
          </View>
        </ScrollView>

        <ScrollView 
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        
        >
            <View className=' flex flex-row flex-wrap '>
                {products.map((prod,index)=>{
                  return (

                        <Surface elevation={6} style={{marginHorizontal: 5, marginVertical: 5}} >
                            <Wrap shouldWrapChildren={true} m={4} className='container'>
                               <TouchableOpacity onPress={()=>{setOpenModal(true)}} className=' container items-center ' style={{width:'100%', height:230    }}>
                                 <View style={{width:190, height:230    }} className='container justify-center items-center' >
                                    <Image style={{width:'80%', height:190    }} className='justify-center flex-row items-center' source={prod.image}></Image> 
                                    
                                    <View className='flex flex-row justify-between items-center w-full p-2'>
                                      <Text className='items-center'>GHC {prod.price}</Text>
                                      <Image  source={prod.buy} />
                                    </View>
                                  </View>
                
                            </TouchableOpacity> 
                            </Wrap>
                            {/* <View key={index} className='p-16 bg-white mx-1.5 justify-evenly items-center '>
                            
                        {/* // </View>  */}
                        </Surface>
                         
                       

                   
                  )
                })}

            </View>
        </ScrollView>
        <PharmacyModal openModal={openModal} setOpenModal={setOpenModal} />
    </View>
  )
}