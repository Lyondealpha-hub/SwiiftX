import { View, Text, Modal } from 'react-native'
import React from 'react'
import Maps from '../navigaton/reusable/Maps'
import Order from './sheets/order'
import { MaterialIcons } from '@expo/vector-icons';


export default function OrderMapModal({ previewDelivery, setPreviewDelivery }) {
    return (
        <View className='container '>
            <Modal visible={previewDelivery} animationType='slide' >
                <View className='container h-full '>
                    <MaterialIcons style={{ marginLeft: 17, marginTop: 60, shadowOpacity: '5px', shadowColor: '#fff', }} onPress={() => { setPreviewDelivery(false) }} name={'close'} size={30} />

                    <Order previewDelivery={previewDelivery} setPreviewDelivery={setPreviewDelivery} />
                </View>
            </Modal>
        </View>
    )
}