import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { FAB, Icon, Input, CheckBox, } from '@rneui/themed';

export default function InputTemplate({ id, label, handleChange, useCheckbox, useRightIcon, rightIcon, handleDisable, disable = true }) {
    return (
        <View>
            <View key={id}>

                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={(values) => { console.log(values); navigation.navigate('BottomTab') }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>


                            {useRightIcon ? (
                                <View id={id}>
                                    <Input
                                        placeholder={label}
                                        leftIcon={{ type: 'material', name: "person", size: 30 }}
                                        onChangeText={handleChange(`${label}`)}
                                        rightIcon={{ type: 'material', name: `${rightIcon && rightIcon}`, size: 30, onPress: handleDisable }}
                                        disabled={disable}
                                    />
                                </View>

                            )
                                :
                                <View id="username">
                                    <Input
                                        placeholder={label}
                                        leftIcon={{ type: 'material', name: "person", size: 30 }}
                                        onChangeText={handleChange(`${label}`)}
                                    />
                                </View>


                            }


                            <View id="agreement">

                                {useCheckbox && (
                                    <CheckBox
                                        checked={true}
                                        onPress={() => { handleChange }}
                                        title="By signing up, you agree to our Terms & Conditions and Privacy Policy"
                                    />
                                )}
                            </View>

                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})