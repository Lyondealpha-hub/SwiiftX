import React from 'react'
import {  Text, View,Image,ImageBackground, TouchableOpacity, Button, Pressable, SafeAreaView } from 'react-native';
import { Entypo, FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import TopNav from '../../TopNav';
// import user from '../../../assets/user.png'
import doc from '../../../assets/doc.jpg';
import doctor from '../../../assets/doctor.png';
import personnel from '../../../assets/personnel.png';
import checkup from '../../../assets/medical-checkup.png';
import aid from '../../../assets/first-aid.png';
import lab from '../../../assets/lab.png';
import year from '../../../assets/year.png';
import { AirbnbRating, Rating } from 'react-native-ratings';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation()

  const DoctorsLink =()=>{
    navigation.navigate('Doctor Profile')
    alert('Welcome to Doctor Profile');
}
     
// Categories
  const categories = [
    {id: 0 , image: doctor, text: 'Doctor'},
    {id: 1 , image: checkup, text: 'Checkup'},
    {id: 2 , image: lab, text: 'Lab'},
    {id: 3 , image: aid, text: 'Medicine'},

  ]
// Health Personnels
  const doctors = [
    {id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation : 'Dentist, BSMMC Hospital', years: 3, cost:600, pressable: DoctorsLink },
    {id: 1, image: doctor, name: 'Dr. Misbahu Ahmed', occupation : 'Ghanacologist', years: 2, cost:320, pressable: DoctorsLink},
    {id: 2, image: doctor, name: 'Dr Nii Achomo', occupation : 'Surgeon', years: 7, cost:1200, pressable: DoctorsLink},
    {id: 3, image: personnel, name: 'Dr Osman', occupation : 'Cardiologist', years: 1, cost:200, pressable: DoctorsLink},
  ]

  //  Rating reviews 
  const rating = ['1', '2.5', '3.5', '4.8', '5', ]

  

  return (
    <View className='container absolute' >
      <TopNav />
      {/* Image render */}
      <View className='contianer h-1/6'>
        <ImageBackground resizeMode='cover' source={doc}  className='h-full flex  flex-row  mx-5 rounded-3xl py-1 '>
          <View className='w-4/5 justify-center px-3'>
            <Text className='text-xl  text-white items-center flex-wrap-reverse'>Looking For Specialist Doctor?</Text>
            <Text className='text-white'>Join with an Online consultation</Text>
          </View>
        {/* <View className='w-2/5 items-end'>
        <Image  className='justify-center items-center ' source={user} />
        </View> */}
        </ImageBackground>
      </View>
      {/* Category */}
      <View className='container  '>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='container ' >
          <View className='container flex flex-row px-2 justify-center items-center'>
              
                {categories.map((cat,index)=>{
                  return (
                    <View key={index} className='w-1/4  px-4 justify-center items-center rounded-md shadow-2xl '>
                      <TouchableOpacity className=' items-center'>
                        <Image className='justify-center items-center ' source={cat.image}></Image>
                        <Text>{cat.text}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                })}
                


          </View>
        </ScrollView>
      </View>
      {/* Featured Doctors */}
      <View className='contianer h-full  px-3 '>
        {/* header */}
        <Text className='justify-start items-start flex text-2xl p-1.5 italic'>Featured Doctors</Text>
        {/* Body cards Contents */}
          
          <View className='container h-full bg-white'>
          <ScrollView   showsVerticalScrollIndicator={false}  alwaysBounceVertical={true}  >
          <View className='container h-full'> 
          {
            doctors.map((doc, index)=>{
              return(
                // Card design
                  <TouchableOpacity onPress={doc.pressable} key={index} className='container h-32 flex flex-row mb-2 bg-white rounded-3xl shadow-2xl '>
                    {/* Profile */}
                    <View className='w-2/6  justify-center items-center '>
                      <Image  className='justify-center items-center ' source={doc.image} />
                    </View>

                    {/* Content texts */}
                    <View className='w-4/6 justify-center '>
                      <Text className='text-lg'>{doc.name} </Text>
                      <Text className='text-sm '>{doc.occupation}</Text>
                        {/* Rating and years in feild  */}
                        <View className='w-full flex flex-row justify-between items-center '>
                          {/* <Rating showRating  type='heart' ratingCount={3} imageSize={20} /> */}
                            <View className='w-1/2 flex flex-row items-center'>
                              <MaterialIcons name='history' size={22} />
                              <Text className='px-1'>{doc.years} Years</Text>
                            </View>
                            {/* <Rating  imageSize={10} readonly={true} showRating={true}  showReadOnlyText={false} ratingCount={3} fractions={1} jumpValue={0.5}  className='flex-row-reverse text-xs' /> */}
                            {/* <Text>10Yrs</Text> */}
                            <View className='w-1/2'> 
                              <AirbnbRating  size={15} showRating={true}  ratingContainerStyle={{flexDirection: 'row-reverse'}} reviews={rating}  reviewSize={13} count={3}  isDisabled={true} />
                            </View>
                            {/* <AirbnbRating starImage={year}  size={30} showRating={false}  ratingContainerStyle={{flexDirection: 'row-reverse',}} reviews={rating}  reviewSize={10} count={1}  isDisabled={true} /> */}
                          

                      </View>

                      {/* cost & button   */}
                      <View className=' flex flex-row justify-between items-center '>
                        <Text className='w-1/2 justify-start'>Cost: ${doc.cost}</Text>
                        <TouchableOpacity className='w-1/2 justify-end '>
                          <Text onPress={doc.pressable} >Consult</Text>
                        </TouchableOpacity>

                      </View>
                    </View>


                  </TouchableOpacity>
              )
            })
          }
          </View>
          </ScrollView>
          </View>
          

      </View>

      <View className='contianer h-full  px-3 '>
        <Text className='justify-start items-start flex text-2xl p-1.5 italic'>Best Selling Products</Text>
      </View>
      
       
      
    </View>
  )
}
