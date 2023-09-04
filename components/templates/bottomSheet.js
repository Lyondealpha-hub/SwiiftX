
import React from 'react'
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const BottomSheetComp = ({ list, isVisible, isIcon }) => {
    return (
        <View>
            <SafeAreaProvider >
                <BottomSheet modalProps={{}} isVisible={isVisible} containerStyle={{ marginBottom: 20, backgroundColor: '' }} >
                    <View className='w-full  flex flex-row justify-end items-center'>
                        <Text className='bg-blue-500 h-20 rounded-full pr-20 mx-20 flex flex-row justify-end'>close</Text>
                    </View>
                    {list.map((l, i) => (
                        <ListItem
                            key={i}
                            containerStyle={l.containerStyle}
                            onPress={l.onPress}
                            bottomDivider

                        >
                            <ListItem.Content >
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>
            </SafeAreaProvider>

        </View>
    )
}
