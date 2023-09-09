import React from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, Pressable, SafeAreaView, ScrollView, StyleSheet, Platform } from 'react-native';
import { Entypo, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FAB, Icon, Input, CheckBox, Button } from '@rneui/themed';
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
import { Stack, Surface, Box, Wrap, ListItem, Avatar } from '@react-native-material/core'
import PharmacyModal from '../../Modals/pharmacyModal';
import { useState } from 'react';
import { BottomSheetComp } from '../../templates/bottomSheet';


export default function Home() {

  const navigation = useNavigation()

  const [states, setStates] = useState({
    openPharmacyModal: false,
  })

  // const updateStates = (key, value) => {
  //   setStates((prev) => ({ ...prev, [key]: value }))
  // }

  const DoctorsLink = () => {
    navigation.navigate('Doctor Profile')
    alert('Welcome to Doctor Profile');
  }


  // const buyProduct = () => {
  //   updateStates('openPharmacyModal', true)
  // }

  const [openModal, setOpenModal] = useState(false)
  const [openSheet, setOpenSheet] = useState(false)

  // Categories
  const categories = [
    { id: 0, image: doctor, text: 'Doctor', trigger: () => { navigation.navigate('Doctors') } },
    { id: 1, image: checkup, text: 'Checkup' },
    { id: 2, image: lab, text: 'Lab', trigger: () => { navigation.navigate('Labs') } },
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
    { id: 0, image: erp, text: 'Doctor', price: 30.00, buy: cart, },
    { id: 1, image: perp1, text: 'Checkup', price: 30.00, buy: cart, },
    { id: 2, image: prep, text: 'Lab', price: 30.00, buy: cart, },
    { id: 3, image: erp, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 4, image: perp1, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 5, image: prep, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 6, image: erp, text: 'Pharmacy', price: 30.00, buy: cart, },
    { id: 7, image: perp1, text: 'Pharmacy', price: 30.00, buy: cart, },

  ]

  //  Rating reviews 
  const rating = ['1', '2.5', '3.5', '4.8', '5',]

  // bottomSheet
  const list = [
    { title: '911 - Ambulance' },
    { title: '211 - Fire service' },
    { title: '511 - Police' },
    { title: 'Send a feedback' },
    // {
    //   title: 'Cancel',
    //   containerStyle: { backgroundColor: 'red', },
    //   titleStyle: { color: 'white' },
    //   onPress: () => { setOpenSheet(false); console.log('CALL OPENED') },
    // },
  ];



  return (
    <View className='container ' >
      <TopNav isSearch={false} setOpenSheet={setOpenSheet} />

      <BottomSheetComp isVisible={openSheet} list={list} close={() => { setOpenSheet(false); console.log('CALL OPENED') }} />

      <View>
        <PharmacyModal openModal={openModal} setOpenModal={setOpenModal} />
      </View>

      {/* Image render */}
      <View className='container h-1/6'>
        <ImageBackground resizeMode='cover' source={doc} className='h-full flex  flex-row  mx-2 rounded-3xl py-1 '>
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
                    <Text style={`${Platform.OS == "ios" && fontFamily.mediumHeading}`} className='items-center pb-2'>{cat.text}</Text>
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
        <View className=' container h-full'>
          {/* For Doctors Page */}
          <View className='container h-4/6   my-0 '>
            <View className='container  flex flex-row justify-between items-center px-2'>
              <Text style={`${Platform.OS === "ios" && fontFamily.BHeading}`} className='text-2xl px-2 py-1 text-slate-800'>Featured Doctors</Text>
              <TouchableOpacity onPress={() => { navigation.navigate('Doctors') }}><Text style={`${Platform.OS == "ios" && fontFamily.BHeading}`}>View all</Text></TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className=' mx-3'>
              {
                doctors.map((doc, index) => {
                  return (
                    // Card design
                    <TouchableOpacity onPress={doc.pressable} key={index} className='container h-32 flex  flex-row mb-2 bg-white rounded-lg shadow-2xl '>
                      {/* Profile */}
                      <View className='w-2/6  justify-center items-center '>
                        <Image className='justify-center items-center ' source={doc.image} />
                      </View>

                      {/* Content texts */}
                      <View className='w-4/6 justify-center '>
                        <Text style={`${Platform.OS === "ios" && fontFamily.mediumHeading}`} className='text-lg'>{doc.name} </Text>
                        <Text style={`${Platform.OS === "ios" && fontFamily.mediumHeading}`} className='text-sm '>{doc.occupation}</Text>
                        {/* Rating and years in feild  */}
                        <View className='w-full flex flex-row justify-between items-center '>
                          {/* <Rating showRating  type='heart' ratingCount={3} imageSize={20} /> */}
                          <View className='w-1/2 flex flex-row items-center'>
                            <MaterialIcons name='history' size={22} />
                            <Text style={`${Platform.OS === "ios" && fontFamily.mediumHeading}`} className='px-1'>{doc.years} Years</Text>
                          </View>
                          {/* <Rating  imageSize={10} readonly={true} showRating={true}  showReadOnlyText={false} ratingCount={3} fractions={1} jumpValue={0.5}  className='flex-row-reverse text-xs' /> */}
                          {/* <Text>10Yrs</Text> */}
                          <View className='w-1/2'>
                            <AirbnbRating size={15} showRating={true} ratingContainerStyle={{ flexDirection: 'row-reverse' }} reviews={rating} reviewSize={13} count={3} isDisabled={true} />
                          </View>
                          {/* <AirbnbRating starImage={year}  size={30} showRating={false}  ratingContainerStyle={{flexDirection: 'row-reverse',}} reviews={rating}  reviewSize={10} count={1}  isDisabled={true} /> */}


                        </View>

                        {/* cost & button   */}
                        <View className=' flex flex-row justify-between items-center px-1 '>
                          <Text className='w-2/5 justify-start'>Cost: ${doc.cost}</Text>
                          <TouchableOpacity onPress={doc.pressable} className='w-3/5 justify-end border-[1px] border-slate-400 rounded p-2  '>
                            <Text style={`${Platform.OS == "ios" && fontFamily.semiBHeading}`} className='px-0.5  ' >Book Appointment</Text>
                          </TouchableOpacity>

                        </View>
                      </View>




                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>

            {/* For products */}
            <View className='container  h-2/6 my-0 '>
              <View className='container flex flex-row justify-between items-center px-2'>
                <Text style={`${Platform.OS == "ios" && fontFamily.BHeading}`} className='text-2xl px-2 py-1 text-slate-800'>Best Delivery Products</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Pharmacy') }}><Text style={`${Platform.OS == "ios" && fontFamily.BHeading}`}>View all</Text></TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className=' mx-3'>
                {products.map((prod, index) => {
                  return (

                    <Surface key={index} elevation={6} style={{ marginHorizontal: 5, marginVertical: 5 }} >
                      <Wrap shouldWrapChildren={true} m={4} className='container'>
                        <TouchableOpacity onPress={() => { setOpenModal(true) }} className=' items-center ' style={{ width: '100%', height: 650 }}>
                          <View style={{ width: 160, height: 230 }} className='justify-center items-center' >
                            <Image style={{ width: 150, height: 190 }} className='justify-center flex-row items-center' source={prod.image}></Image>

                            <View className='flex flex-row justify-between items-center w-full p-2'>
                              <Text style={`${Platform.OS === "ios" && fontFamily.mediumHeading}`} className='items-center'>GHC {prod.price}</Text>
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



            </View>

          </View>
          {/* End of Doctors and pharmacy */}


          {/* Other details */}
          <View className='container  h-full'>
            <View className='container m-4'>
              <Button
                buttonStyle={{ width: '30%', paddingHorizontal: 5, borderRadius: 10 }}
                color={'#9F7AEA'}
                radius={'sm'}
                type="solid"
              >

                <Icon name="save" color="white" />
                Upload

              </Button>
            </View>

            {/* display recent uploaded content */}
            <View className=''>
              <ListItem
                leadingMode="avatar"
                leading={
                  <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                }
                title="Preview uploaded Prescriptions..."
                secondaryText="myPrescriptions.pdf"
              />

            </View>

          </View>
        </View>
      </ScrollView>

    </View>



  )
}


const fontFamily = StyleSheet.create({
  mediumHeading: {
    fontFamily: 'AppleSDGothicNeo-Medium',
  },
  semiBHeading: {
    fontFamily: 'AppleSDGothicNeo-SemiBold',
  },
  BHeading: {
    fontFamily: 'AppleSDGothicNeo-Bold',
  }
})

