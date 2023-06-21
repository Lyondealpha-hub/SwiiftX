import React, { Component }  from 'react';
import { View, Text, Image } from 'react-native'
import { FAB, Icon, Input } from '@rneui/themed';
import logo from '../../assets/logo.jpg';

export default function SignUp(){
    return (
        <View className="container">
            {/* TOP OPTIONS */}
            <View className="container  flex flex-row  justify-between  p-3">
                <View className="w-1/2 flex-row justify-start ">
                    <FAB
                        // visible={visible}
                        size='small'
                        title="Patient"
                        upperCase
                        icon={{ name: 'person', color: 'white' }}
                        color="blue"
                        className="shadow-2xl"
                        
                    />
                </View>


                <View className="w-1/2 flex-row justify-end ">
                    <FAB
                        // visible={visible}
                        size='small'
                        title="Doctor"
                        upperCase
                        icon={{ name: 'person', color: 'white' }}
                        className="shadow-2xl"

                        
                    />

                </View>

            </View>

            {/* Logo */}
            <View className='w-full  justify-center items-center py-5'>
                <Text className="text-3xl ">Welcome To</Text>
                <View className='flex-row justify-items-center'>
                    <Image className="w-36 h-36" source={logo} alt='' />
                </View>
                
            </View>

            {/* Form */}
            <View>
                <View>
                    <Input
                        placeholder="Comment"
                        leftIcon={{ type: 'font-awesome', name: 'FaUser' }}
                        onChangeText={value => this.setState({ comment: value })}
                    />
                </View>
            </View>
        </View>
    )
    
}