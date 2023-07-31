
import React from 'react'
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const BottomSheetComp = ({list, isVisible}) => {
    return (
        <View>
            <SafeAreaProvider>
                <BottomSheet  modalProps={{}} isVisible={isVisible} >
                    {list.map((l, i) => (
                        <ListItem
                            key={i}
                            containerStyle={l.containerStyle}
                            onPress={l.onPress}
                        >
                            <ListItem.Content>
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>
            </SafeAreaProvider>
        </View>
    )
}
