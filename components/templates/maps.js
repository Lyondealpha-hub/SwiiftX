import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps';

export default function MapsDirection() {
    return (
        <View style={styles.container} className='container '>
            {/* Header */}
            <View style={styles.header} className='container h-full'>
                {/* maps */}
                <View className='h-full'>
                    {/* trying to make the search hover on the map so the map fills the entire screeen  */}
                    <View className='p-5 absolute top-0 left-0'>
                        <GooglePlacesAutocomplete
                            placeholder='Where To'
                            styles={{
                                container: {
                                    flex: 0
                                },
                                textInput: {
                                    fontSize: 18
                                }
                            }}
                            // currentLocation={true}
                            onPress={(data, details) => { console.log(data, details) }}
                            enablePoweredByContainer={false}
                            minLength={2}
                            nearbyPlacesAPI="GooglePlacesSearch"
                            debounce={400}
                            query={{
                                key: GOOGLE_MAPS_APIKEY,
                                language: "en",
                            }}
                        />
                    </View>

                    {/* map content */}

                    <View className='container h-full relative'>
                        <MapView
                            className='flex-1 z-10'
                           
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                        
                    </View> 

                </View>




            </View>

            <View style={styles.footer}>


                {/* Checkout button */}
                <View className='container h-14   absolute px-5  inset-x-0 bottom-0  '>
                    <TouchableOpacity className='w-full mx-auto h-12 flex flex-row justify-center items-center  bg-purple-400 rounded-xl' >
                        <Text className='text-white text-lg   justify-center items-center'>Pick a ride!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 7,
        width: '100%',
        height: '100%',
    },

    footer: {
        flex: 4,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'lightgrey',

    },
})