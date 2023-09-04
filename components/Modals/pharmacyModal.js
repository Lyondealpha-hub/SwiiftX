import { MaterialIcons } from '@expo/vector-icons'
import { Text, View, FlatList, TouchableOpacity, Modal, SafeAreaView } from 'react-native'
import PharmacySheet from './sheets/pharmacy'



export default function PharmacyModal(props) {



    return (
        <View className='container '>
            <Modal visible={props.openModal} animationType='slide' >
                <View className='container h-full '>
                    <SafeAreaView className='container h-full '>
                        <MaterialIcons style={{ marginLeft: 17, shadowOpacity: '5px', shadowColor: '#fff', }} onPress={() => { props.setOpenModal(false) }} name={'close'} size={30} />
                        <PharmacySheet setOpenModal={props.setOpenModal} />
                    </SafeAreaView>
                </View>
            </Modal>
        </View>
    )
}