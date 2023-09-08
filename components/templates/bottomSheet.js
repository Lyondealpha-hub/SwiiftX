
import React from 'react'
import { BottomSheet, Button, ListItem, FAB } from '@rneui/themed';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const BottomSheetComp = ({ list, isVisible, isIcon, close }) => {
    return (
        <View>
            <SafeAreaProvider >
                <BottomSheet modalProps={{}} isVisible={isVisible} containerStyle={{ marginBottom: 20, backgroundColor: 'transparent', }} className='shadow-2xl' >
                    <View className='w-full  flex flex-row justify-end items-center '>
                        <FAB
                            // loading
                            visible={true}
                            icon={{ name: 'close', color: 'white' }}
                            size="small"
                            containerStyle={{ justifyContent: 'flex-end', }}
                            onPress={close}
                        />
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
