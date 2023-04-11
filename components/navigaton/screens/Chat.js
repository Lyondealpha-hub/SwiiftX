import React from 'react'
import {  Text, View,Image,ImageBackground,ScrollView, TouchableOpacity, Button, Pressable, SafeAreaView } from 'react-native';
import { Entypo, FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';


export const Chat = ()=>{
    const useNavigation = useNavigation()



    return(
        <View className="container flex-1 items-center" style={styles.container}>
            <FlatList 
                data={CusMessages}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={()=>{navigation.navigate('Messages',{userName: item.userName})}} className='container' >
                        <View style={styles.userinfo} className=''>
                            <View style={styles.userImgWrapper}>
                                {item.userImg}
                            </View>
                            <View style={styles.textSection}>
                            <View style={styles.userInfoText}>
                                    <Text>{item.userName}</Text>
                                    <Text>{item.messageTime}</Text>
                            </View>
                            <Text>{item.messageText}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

    </View>
    )


}