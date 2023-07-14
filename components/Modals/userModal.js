import { MaterialIcons } from '@expo/vector-icons'
import {Text, View, FlatList, TouchableOpacity, Modal } from 'react-native'
import Profile from './sheets/profile'



export default function UserProfileModal ({openProfile, setOpenProfile}){

    

    return(
        <View className='container '>
            <Modal visible={openProfile} animationType='slide' >
                <View className='container h-full '>
                    <MaterialIcons style={{marginLeft: 17, marginTop: 60, shadowOpacity:'5px', shadowColor:'#fff', }} onPress={()=>{setOpenProfile(false)}} name={'close'} size={30}  />

                    <Profile setOpenProfile={setOpenProfile} />

                </View>
            </Modal>
        </View>
    )
}