import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { FAB, Icon, Input, CheckBox, SocialIcon } from '@rneui/themed';
import logo from '../../assets/logo.jpg';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import google from '../../assets/google.png'

export default function Login() {

    const navigation = useNavigation()

    const [states, setStates] = useState({
        agree: false,
        username: "",
        email: "",
        mobile: "",
        password: "",
        patientPage: "",
        doctor: "",
        userPage: false,

    });

    const updateStates = (key, value) => {
        setStates((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <View className="container h-full bg-white">
            {/* TOP OPTIONS */}
            <View className="container  flex flex-row  justify-between  p-3">
                <View className="w-1/2 flex-row justify-start ">
                    <FAB
                        visible={!states.userPage}
                        size='small'
                        title="Patient"
                        onPress={() => { updateStates('patientPage', "#Ba68c8"); updateStates('userPage', true); console.log(states.patientPage) }}
                        upperCase
                        icon={{ name: 'person', color: 'black', size: "25" }}
                        color={`${states.patientPage}`}
                        className="shadow-2xl "
                        buttonStyle={{ backgroundColor: "#ccc", borderColor: "#ccc", borderWidth: 1, }}

                    />
                </View>


                <View className="w-1/2 flex-row justify-end ">
                    <FAB
                        visible={states.userPage}
                        onPress={() => { updateStates('userPage', false) }}
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
                <Text style={fontFamily.BHeading} className="text-3xl ">Welcome Back!</Text>
                <View className='flex-row justify-items-center'>
                    <Image className="w-36 h-36 bg-transparent" source={logo} alt='' />
                </View>

            </View>

            {/* Form */}

            <View className="mx-auto">
                {states.userPage ?

                    // Patient signup form
                    <View>

                        <Formik
                            initialValues={{ email: '' }}
                            onSubmit={(values) => { console.log(values); navigation.navigate('BottomTab') }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <View>


                                    <View id="email">
                                        <Input
                                        style={fontFamily.mediumHeading}
                                            placeholder="Enter Email Address"
                                            // errorMessage='password must be at least'
                                            onChange={(e) => { console.log(e) }}
                                            leftIcon={{ type: 'material', name: "mail", size: 30 }}
                                            onChangeText={handleChange('email')}
                                        />
                                    </View>

                                    <View id="password">
                                        <Input
                                        style={fontFamily.mediumHeading}
                                            placeholder="Enter Password "
                                            secureTextEntry={true}
                                            leftIcon={{ type: 'material', name: "lock", size: 30 }}
                                            onChangeText={handleChange('password')}

                                        />
                                    </View>


                                    <TouchableOpacity onPress={handleSubmit} className=" bg-purple-400 rounded-md mx-auto px-[135px] py-1 mt-5 mb-1 drop-shadow-2xl justify-center items-center">
                                        <Text style={fontFamily.mediumHeading} className="text-2xl flex flex-col justify-center text-white">Login</Text>
                                    </TouchableOpacity>

                                    <View className='w-full  flex flex-row  justify-center items-center my-1 '>
                                        <Text style={fontFamily.mediumHeading} className='text-xl'>OR</Text>
                                    </View>

                                    <TouchableOpacity onPress={handleSubmit} className=" shadow-xl bg-slate-200 flex flex-row space-x-2 rounded-md mx-auto w-[333px] py-1 my-0.5 drop-shadow-2xl justify-between">
                                        <View className='w-1/4 flex flex-row justify-center items-center '>
                                            <Image source={google} alt="" />
                                        </View>
                                        <View className='w-3/4'>
                                        <Text style={fontFamily.mediumHeading} className="text-2xl border-[2px] text-slate-600">Sign in with Google </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View className="w-full flex flex-row justify-center items-center  inset-x-0 bottom-0 h-28">
                                        <Text style={fontFamily.mediumHeading} className="text-lg">Are you New? <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} ><Text style={fontFamily.semiBHeading} className="h-full flex-row justify-center underline items-center text-xl">SignUp</Text></TouchableOpacity></Text>
                                    </View>

                                    {/* Below demostrates how it should work here  */}
                                    {/* <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                <Button onPress={handleSubmit} title="Submit" /> */}
                                </View>
                            )}
                        </Formik>
                    </View>

                    :
                    <View>
                        {/* Doctors signup */}
                        <Formik
                            initialValues={{ email: '' }}
                            onSubmit={(values) => { console.log(values); navigation.navigate('BottomTab') }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <View>
                                    <View id="username">
                                        <Input
                                            style={fontFamily.mediumHeading}
                                            placeholder="Identification card "
                                            leftIcon={{ type: 'material', name: "person", size: 30 }}
                                            onChangeText={handleChange('userName')}
                                        />
                                    </View>

                                    <View id="email">
                                        <Input
                                            style={fontFamily.mediumHeading}
                                            placeholder="Enter Email Address"
                                            // errorMessage='password must be at least'
                                            onChange={(e) => { console.log(e) }}
                                            leftIcon={{ type: 'material', name: "mail", size: 30 }}
                                            onChangeText={handleChange('email')}
                                        />
                                    </View>

                                    <View id="password">
                                        <Input
                                            style={fontFamily.mediumHeading}
                                            placeholder="Enter Password "
                                            secureTextEntry={true}
                                            leftIcon={{ type: 'material', name: "lock", size: 30 }}
                                            onChangeText={handleChange('password')}

                                        />
                                    </View>


                                    <TouchableOpacity onPress={handleSubmit} className=" bg-purple-400 rounded-md mx-auto px-[135px] py-1 mt-5 mb-1 drop-shadow-2xl justify-center items-center">
                                        <Text style={fontFamily.mediumHeading} className="text-2xl flex flex-col justify-center text-white">Login</Text>
                                    </TouchableOpacity>

                                    <View className='w-full  flex flex-row  justify-center items-center my-1 '>
                                        <Text style={fontFamily.mediumHeading} className='text-xl'>OR</Text>
                                    </View>

                                    <TouchableOpacity onPress={handleSubmit} className=" shadow-xl bg-slate-200 flex flex-row space-x-2 rounded-md mx-auto w-[333px] py-1 my-0.5 drop-shadow-2xl justify-between">
                                        <View className='w-1/4 flex flex-row justify-center items-center '>
                                            <Image source={google} alt="" />
                                        </View>
                                        <View className='w-3/4'>
                                        <Text style={fontFamily.mediumHeading} className="text-2xl border-[2px] text-slate-600">Sign in with Google </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View className="w-full flex flex-row justify-center items-center  inset-x-0 bottom-0 h-28">
                                        <Text style={fontFamily.mediumHeading} className="text-lg">Are you New? <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} ><Text style={fontFamily.semiBHeading} className="h-full flex-row justify-center underline items-center text-xl">SignUp</Text></TouchableOpacity></Text>
                                    </View>
                                </View>
                            )}
                        </Formik>

                    </View>
                }
            </View>
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

