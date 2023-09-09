import { View, Text, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Button, Overlay, Icon } from '@rneui/themed';
import { useGeneralValues } from '../store/useGeneralValue';

export default function ModalPop({ isVisible, setisVisible, title, }) {

    const { setGeneralValues } = useGeneralValues()
    const zusStates = useGeneralValues((state) => state)
    //onBackdropPress={toggleOverlay}
    return (
        <View className='container '>
            <Overlay overlayStyle={{ width: '95%' }} isVisible={isVisible}  >
                <Text className='py-1 text-xl'> {title}</Text>
                <TextInput
                    editable
                    value={zusStates?.AppointmentReason}
                    onChangeText={(e) => { setGeneralValues('AppointmentReason', e); }}
                    multiline

                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    className='h-[200px] flex-col align-text-top px-1 text-start justify-start items-start border-[1px] border-slate-300 rounded'
                    style={{ textAlignVertical: 'top' }}
                />
                <Button
                    icon={
                        <Icon
                            name="wrench"
                            type="font-awesome"
                            color="white"
                            size={25}
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    title="Confirm Appointment"
                    onPress={() => { setisVisible(false) }}
                    style={{ marginTop: 10 }}
                    color={'#9F7AEA'}
                />
            </Overlay>
        </View>
    )
}