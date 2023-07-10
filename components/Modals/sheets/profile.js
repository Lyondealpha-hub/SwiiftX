import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import personnel from '../../../assets/personnel.png';
import edit from '../../../assets/edit.png';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

<<<<<<< HEAD
export default function Profile(props) {
=======
export default function Profile ({setOpenProfile}){
>>>>>>> 16822a925b240451e4a646994f66a58e09c98b30

    const navigation = useNavigation()

    // creating a custom share
    const CustomShare = () => {
        const shareOptions = {
            message: "This is a test message, Welcome to swiiftX, Loooking for a specialist doctor? Look no further you are in the right spot",
        }
        try {
            const ShareResponse = Share.share(shareOptions);
            console.log(JSON.stringify(shareOptions));
        } catch (error) {
            console.log('Error => ', error);
        }
    }

    const MyAppointmentsLink = () => {
        navigation.navigate('Appointments')
        setOpenProfile !== undefined && setOpenProfile(false)

    }
    const LogOut =()=>{
        navigation.navigate('Login')
        setOpenProfile !== undefined && setOpenProfile(false)
    }
    const EditLink = () => {
        navigation.navigate('Edit Profile')
        alert(props.setOpenProfile(false));
    }

    const profile = [
        { id: 0, image: personnel, name: 'Dr. Afrane Aykire', occupation: 'Dentist, BSMMC Hospital', years: 3, cost: 600 },
    ]

    const profileSettings = [
<<<<<<< HEAD
        { id: 1, image: 'local-activity', label: 'My Appointments', button: MyAppointmentsLink },
        { id: 2, image: 'notifications-none', label: 'Reminders', },
        { id: 3, image: 'payment', label: 'Payments', },
        { id: 4, image: 'switch-account', label: 'Add account', },
        { id: 5, image: 'share', label: 'Invite friends via ...', button: CustomShare },
        { id: 6, image: 'logout', label: 'Log out', },
=======
        {id: 1, image: 'local-activity', label: 'My Appointments', button : MyAppointmentsLink  },
        {id: 2, image: 'notifications-none', label: 'Reminders', },
        {id: 3, image: 'payment', label: 'Payments', },
        {id: 4, image: 'switch-account', label: 'Add account', },
        {id: 5, image: 'share', label: 'Invite friends via ...', button : CustomShare},
        {id: 6, image: 'logout', label: 'Log out', button : LogOut },
>>>>>>> 16822a925b240451e4a646994f66a58e09c98b30
    ]

    return (
        <View className='contianer h-screen '>
            {/* profile space */}
            <View className='container mt-2'>
                {/* Profile picture and name  */}
                <View className='container flex flex-row'>
                    <View className='w-2/6  justify-center items-center '>
                        <Image className='justify-center items-center ' source={personnel} />
                    </View>
                    {/* Name */}
                    <View className='justify-center items-center'>
                        <Text className='text-lg'>Dr. Afrane Aykire</Text>
                        <Text className='text-sm '>Dentist, BSMMC Hospital</Text>
                    </View>
                    <TouchableOpacity onPress={EditLink} className='ml-8 justify-center items-center '>
                        <Image className='' source={edit} />
                    </TouchableOpacity>
                </View>

                {/* Doctor description  */}
                <View className='container h-28 bg-slate-300 flex flex-row justify-evenly py-5'>
                    {/* Avalability */}
                    <View className=' w-1/3 items-center border-r-2 px-2 border-r-slate-500'>
                        <Text>Availability</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='history' size={20} />
                            <Text >6 Years</Text>
                        </View>

                    </View>

                    {/* Experience */}
                    <View className='w-1/3 items-center border-r-2 px-2 border-r-slate-500'>
                        <Text>Experience</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='history' size={20} />
                            <Text >6 Years</Text>
                        </View>
                    </View>

                    {/*Ratings  */}
                    <View className='w-1/3  items-center'>
                        <Text>Ratings</Text>
                        <View className='container h-full flex flex-row px-2 justify-center items-center '>
                            <MaterialIcons className='' name='history' size={20} />
                            <Text >6 Years</Text>
                        </View>
                    </View>

                </View>

            </View>
            {/* Profile settings */}

            <ScrollView scrollEnabled={true} scrollToOverflowEnabled={true}>
                <View className='container'>
                    {
                        profileSettings.map((cat, index) => {
                            return (
                                <TouchableOpacity key={cat.id} onPress={cat.button} style={styles.cardDesign} className='container flex flex-row items-center py-7 shadow-2xl mx-4 '>
                                    <MaterialIcons className='' name={cat.image} size={30} />
                                    <Text className='px-4'>{cat.label}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }


                </View>
            </ScrollView>
            <View className='container h-28 flex flex-row justify-center items-center'>
                <Text className=''>Swiift CopyRights @ 2022</Text>
            </View>
        </View>
    )
}


const styles = new StyleSheet.create({
    cardDesign: {
        borderBottomWidth: 0.5,
    }
})