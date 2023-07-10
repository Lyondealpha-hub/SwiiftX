import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { FAB, Icon, Input, CheckBox, } from '@rneui/themed';
import logo from '../../assets/logo.jpg';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

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
                        // visible={visible}
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
                        // visible={visible}
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
                <Text className="text-3xl ">Welcome To</Text>
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
                                    <View id="username">
                                        <Input
                                            placeholder="Username or Full Name "
                                            leftIcon={{ type: 'material', name: "person", size: 30 }}
                                            onChangeText={handleChange('userName')}
                                        />
                                    </View>

                                    <View id="email">
                                        <Input
                                            placeholder="Enter Email Address"
                                            // errorMessage='password must be at least'
                                            onChange={(e) => { console.log(e) }}
                                            leftIcon={{ type: 'material', name: "mail", size: 30 }}
                                            onChangeText={handleChange('email')}
                                        />
                                    </View>
                                    <View id="mobile">
                                        <Input
                                            placeholder="Enter Mobile Number "
                                            leftIcon={{ type: 'material', name: "call", size: 30 }}
                                            onChangeText={handleChange('mobile')}
                                        />
                                    </View>
                                    <View id="password">
                                        <Input
                                            placeholder="Enter Password "
                                            secureTextEntry={true}
                                            leftIcon={{ type: 'material', name: "lock", size: 30 }}
                                            onChangeText={handleChange('password')}

                                        />
                                    </View>

                                    <View id="agreement">

                                        <CheckBox
                                            checked={states.agree}
                                            onPress={() => { updateStates('agree', !states.agree) }}
                                            title="By signing up, you agree to our Terms & Conditions and Privacy Policy"
                                        />
                                    </View>
                                    <TouchableOpacity onPress={handleSubmit} className=" bg-purple-400 rounded-md mx-auto px-[135px] py-1 my-8 drop-shadow-2xl justify-center items-center">
                                        <Text className="text-2xl text-white">Sign Up</Text>
                                    </TouchableOpacity>

                                    <View className="w-full flex flex-row justify-center items-center  inset-x-0 bottom-0 h-16">
                                        <Text className="text-lg">Join us before?
                                            <TouchableOpacity className='px-1'>
                                                <Text className="font-semibold text-xl ">Login</Text>
                                            </TouchableOpacity></Text>
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
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <View>
                                    <View id="username">
                                        <Input
                                            placeholder="Identification card "
                                            leftIcon={{ type: 'material', name: "person", size: 30 }}
                                            onChangeText={handleChange('userName')}
                                        />
                                    </View>

                                    <View id="email">
                                        <Input
                                            placeholder="Enter Email Address"
                                            // errorMessage='password must be at least'
                                            onChange={(e) => { console.log(e) }}
                                            leftIcon={{ type: 'material', name: "mail", size: 30 }}
                                            onChangeText={handleChange('email')}
                                        />
                                    </View>
                                    <View id="mobile">
                                        <Input
                                            placeholder="Enter Mobile Number "
                                            leftIcon={{ type: 'material', name: "call", size: 30 }}
                                            onChangeText={handleChange('mobile')}
                                        />
                                    </View>
                                    <View id="password">
                                        <Input
                                            placeholder="Enter Password "
                                            secureTextEntry={true}
                                            leftIcon={{ type: 'material', name: "lock", size: 30 }}
                                            onChangeText={handleChange('password')}

                                        />
                                    </View>

                                    <View id="agreement">

                                        <CheckBox
                                            checked={states.agree}
                                            onPress={() => { updateStates('agree', !states.agree) }}
                                            title="By signing up, you agree to our Terms & Conditions and Privacy Policy"
                                        />
                                    </View>
                                    <TouchableOpacity onPress={handleSubmit} className=" bg-purple-400 rounded-md mx-auto px-[135px] py-1 my-8 drop-shadow-2xl justify-center items-center">
                                        <Text className="text-2xl text-white">Sign Up</Text>
                                    </TouchableOpacity>

                                    <View className="w-full flex flex-row justify-center items-center  inset-x-0 bottom-0 h-16">
                                        <Text className="text-lg">Join us before?
                                            <TouchableOpacity className='px-1'>
                                                <Text className="font-semibold text-xl ">Login</Text>
                                            </TouchableOpacity></Text>
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
                }
            </View>
        </View>
    )

}