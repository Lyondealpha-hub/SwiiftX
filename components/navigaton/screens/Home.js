import React from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, Button, Pressable, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Entypo, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import TopNav from '../reusable/TopNav';
// import user from '../../../assets/user.png'
import doc from '../../../assets/doc.jpg';
import doctor from '../../../assets/doctor.png';
import personnel from '../../../assets/personnel.png';
import checkup from '../../../assets/medical-checkup.png';
import aid from '../../../assets/first-aid.png';
import lab from '../../../assets/lab.png';
import year from '../../../assets/year.png';
import erp from '../../../assets/erp.jpg'
import perp1 from '../../../assets/perp1.webp'
import prep from '../../../assets/prep.jpg'
import cart from '../../../assets/shopping-cart.png';
import { AirbnbRating, Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { Stack, Surface, Box, Wrap } from '@react-native-material/core'
<<<<<<< HEAD
=======
import PharmacyModal from '../../Modals/pharmacyModal';
import { useState } from 'react';
>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923


export default function Home() {

  const navigation = useNavigation()

<<<<<<< HEAD
=======
  const [states, setStates] = useState({
    openPharmacyModal: false,
  })

  // const updateStates = (key, value) => {
  //   setStates((prev) => ({ ...prev, [key]: value }))
  // }

>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923
  const DoctorsLink = () => {
    navigation.navigate('Doctor Profile')
    alert('Welcome to Doctor Profile');
  }

<<<<<<< HEAD
=======
  // const buyProduct = () => {
  //   updateStates('openPharmacyModal', true)
  // }

  const [openModal, setOpenModal] = useState(false)

>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923
  // Categories
  const categories = [
    { id: 0, image: doctor, text: 'Doctor' },
    { id: 1, image: checkup, text: 'Checkup' },
    { id: 2, image: lab, text: 'Lab' },
    { id: 3, image: aid, text: 'Pharmacy', trigger: () => { navigation.navigate('Pharmacy') } },

  ]
  // Health Personnels
  const doctors = [
    { id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation: 'Dentist, BSMMC Hospital', years: 3, cost: 600, pressable: DoctorsLink },
    { id: 1, image: doctor, name: 'Dr. Misbahu Ahmed', occupation: 'Gynaecologist', years: 2, cost: 320, pressable: DoctorsLink },
    { id: 2, image: doctor, name: 'Dr Nii Achomo', occupation: 'Surgeon', years: 7, cost: 1200, pressable: DoctorsLink },
    { id: 3, image: personnel, name: 'Dr Osman', occupation: 'Cardiologist', years: 1, cost: 200, pressable: DoctorsLink },
  ]

  const products = [
<<<<<<< HEAD
    { id: 0, image: erp, text: 'Doctor', price: 30.00, buy: cart },
    { id: 1, image: perp1, text: 'Checkup', price: 30.00, buy: cart },
    { id: 2, image: prep, text: 'Lab', price: 30.00, buy: cart },
    { id: 3, image: erp, text: 'Pharmacy', price: 30.00, buy: cart },
    { id: 4, image: perp1, text: 'Pharmacy', price: 30.00, buy: cart },
    { id: 5, image: prep, text: 'Pharmacy', price: 30.00, buy: cart },
    { id: 6, image: erp, text: 'Pharmacy', price: 30.00, buy: cart },
    { id: 7, image: perp1, text: 'Pharmacy', price: 30.00, buy: cart },
=======
    { id: 0, image: erp, text: 'Doctor', price: 30.00, buy: cart, },
    { id: 1, image: perp1, text: 'Checkup', price: 30.00, buy: cart, },
    { id: 2, image: prep, text: 'Lab', price: 30.00, buy: cart, },
    { id: 3, image: erp, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 4, image: perp1, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 5, image: prep, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 6, image: erp, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 7, image: perp1, text: 'Pharmacy', price: 30.00, buy: cart, },
>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923

  ]

  //  Rating reviews 
  const rating = ['1', '2.5', '3.5', '4.8', '5',]



  return (
<<<<<<< HEAD
    <View className='container h-full' >
      <TopNav />

=======
    <View className='container' >
      <TopNav />

      <View>
        <PharmacyModal openModal={openModal} setOpenModal={setOpenModal} />
      </View>

>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923
      {/* Image render */}
      <View className='contianer h-1/6'>
        <ImageBackground resizeMode='cover' source={doc} className='h-full flex  flex-row  mx-5 rounded-3xl py-1 '>
          <View className='w-4/5 justify-center px-3'>
            <Text className='text-xl  text-white items-center flex-wrap-reverse'>Looking For Specialist Doctor?</Text>
            <Text className='text-white'>Join with an Online consultation</Text>
          </View>

        </ImageBackground>
      </View>

      {/* Category */}
      <View className='container '>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='container ' >
          <View className='container flex flex-row px-2 justify-center items-center'>

            {categories.map((cat, index) => {
              return (
                <View key={index} className='  px-4 justify-evenly items-center rounded-md shadow-2xl '>
                  <TouchableOpacity className=' items-center ' onPress={cat.trigger} >
                    <Image className='justify-center items-center ' source={cat.image}></Image>
                    <Text style={fontFamilyM} className='items-center'>{cat.text}</Text>
                  </TouchableOpacity>
                </View>
              )
            })}



          </View>
        </ScrollView>
      </View>


      {/* Body */}

      <ScrollView>
        {/* Parent div */}
<<<<<<< HEAD
        <View className=' container h-screen'>
=======
        <View className=' container h-full'>
>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923
          {/* For Doctors Page */}
          <View className='container h-4/6 '>
            <View className='container flex flex-row justify-between items-center px-2'>
              <Text style={fontFamilyDM} className='text-2xl px-2 py-1 italic'>Featured Doctors</Text>
              <TouchableOpacity><Text>View all</Text></TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className=' mx-3'>
              {
                doctors.map((doc, index) => {
                  return (
                    // Card design
                    <TouchableOpacity onPress={doc.pressable} key={index} className='container h-32 flex  flex-row mb-2 bg-white rounded-3xl shadow-2xl '>
                      {/* Profile */}
                      <View className='w-2/6  justify-center items-center '>
                        <Image className='justify-center items-center ' source={doc.image} />
                      </View>

                      {/* Content texts */}
                      <View className='w-4/6 justify-center '>
                        <Text style={fontFamilyM} className='text-lg'>{doc.name} </Text>
                        <Text style={fontFamilyM} className='text-sm '>{doc.occupation}</Text>
                        {/* Rating and years in feild  */}
                        <View className='w-full flex flex-row justify-between items-center '>
                          {/* <Rating showRating  type='heart' ratingCount={3} imageSize={20} /> */}
                          <View className='w-1/2 flex flex-row items-center'>
                            <MaterialIcons name='history' size={22} />
                            <Text style={fontFamilyM} className='px-1'>{doc.years} Years</Text>
                          </View>
                          {/* <Rating  imageSize={10} readonly={true} showRating={true}  showReadOnlyText={false} ratingCount={3} fractions={1} jumpValue={0.5}  className='flex-row-reverse text-xs' /> */}
                          {/* <Text>10Yrs</Text> */}
                          <View className='w-1/2'>
                            <AirbnbRating size={15} showRating={true} ratingContainerStyle={{ flexDirection: 'row-reverse' }} reviews={rating} reviewSize={13} count={3} isDisabled={true} />
                          </View>
                          {/* <AirbnbRating starImage={year}  size={30} showRating={false}  ratingContainerStyle={{flexDirection: 'row-reverse',}} reviews={rating}  reviewSize={10} count={1}  isDisabled={true} /> */}


                        </View>

                        {/* cost & button   */}
                        <View className=' flex flex-row justify-between items-center '>
                          <Text className='w-2/5 justify-start'>Cost: ${doc.cost}</Text>
                          <TouchableOpacity className='w-3/5 justify-end '>
                            <Text className='px-0.5' onPress={doc.pressable} >Book Appointment</Text>
                          </TouchableOpacity>

                        </View>
                      </View>


<<<<<<< HEAD
=======


                      {/* cost & button   */}
                      <View className=' flex flex-row justify-between items-center '>
                        <Text className='w-2/5 justify-start'>Cost: ${doc.cost}</Text>
                        <TouchableOpacity className='w-3/5 justify-end '>
                          <Text className='px-0.5' onPress={doc.pressable} >Book Appointment</Text>
                        </TouchableOpacity>

                      </View>



>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
<<<<<<< HEAD
          </View>
          {/* For products */}
          <View className='container  h-2/6 '>
            <View className='container flex flex-row justify-between items-center px-2'>
              <Text style={fontFamilyDM} className='text-2xl px-2 py-1 italic'>Best Delivery Products</Text>
              <TouchableOpacity><Text>View all</Text></TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className=' mx-3'>
              {products.map((prod, index) => {
                return (

                  <Surface elevation={6} style={{ marginHorizontal: 5, marginVertical: 5 }} >
                    <Wrap shouldWrapChildren={true} m={4} className='container'>
                      <TouchableOpacity className=' items-center ' style={{ width: '100%', height: 230 }}>
                        <View style={{ width: 160, height: 230 }} className='justify-center items-center' >
                          <Image style={{ width: 150, height: 190 }} className='justify-center flex-row items-center' source={prod.image}></Image>

                          <View className='flex flex-row justify-between items-center w-full p-2'>
                            <Text className='items-center'>GHC {prod.price}</Text>
                            <Image source={prod.buy} />
                          </View>
                        </View>
                        {/* <View className='flex flex-row justify-between'>
                                    <Text>Hi</Text>
                                    <Text>Hello</Text>
                                 </View> */}
                      </TouchableOpacity>
                    </Wrap>
                    {/* <View key={index} className='p-16 bg-white mx-1.5 justify-evenly items-center '>
                            
                        {/* // </View>  */}
                  </Surface>




                )
              })}
            </ScrollView>
=======

            {/* For products */}
            <View className='container  h-2/6 '>
              <View className='container flex flex-row justify-between items-center px-2'>
                <Text style={fontFamilyDM} className='text-2xl px-2 py-1 italic'>Best Delivery Products</Text>
                <TouchableOpacity><Text>View all</Text></TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className=' mx-3'>
                {products.map((prod, index) => {
                  return (

                    <Surface elevation={6} style={{ marginHorizontal: 5, marginVertical: 5 }} >
                      <Wrap shouldWrapChildren={true} m={4} className='container'>
                        <TouchableOpacity onPress={() => { setOpenModal(true) }} className=' items-center ' style={{ width: '100%', height: 700 }}>
                          <View style={{ width: 160, height: 230 }} className='justify-center items-center' >
                            <Image style={{ width: 150, height: 190 }} className='justify-center flex-row items-center' source={prod.image}></Image>

                            <View className='flex flex-row justify-between items-center w-full p-2'>
                              <Text className='items-center'>GHC {prod.price}</Text>
                              <Image source={prod.buy} />
                            </View>
                          </View>

                        </TouchableOpacity>
                      </Wrap>

                      {/* // </View>  */}
                    </Surface>

                  )
                })}
              </ScrollView>
>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923

            </View>
          </View>
        </View>
<<<<<<< HEAD

        {/* other details  */}
        <View className="container">

          <View>
            <FAB
              // visible={states.userPage}
              // onPress={() => { updateStates('userPage', false) }}
              size='small'
              title="Doctor"
              upperCase
              icon={{ name: 'person', color: 'white' }}
              className="shadow-2xl"


            />
          </View>

        </View>
      </ScrollView>













=======
      </ScrollView>

>>>>>>> 050bbf1004cadf3ac8c7b35797ca82cc2ae07923
    </View>



  )
}


const fontFamilyM = StyleSheet.create({
  fontFamily: 'AvenirNext-Medium',
})
const fontFamilyDM = StyleSheet.create({
  fontFamily: 'AvenirNext-DemiBold',
})

