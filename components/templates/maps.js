import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps';

export default function MapsDirection() {

    const [uselocations, setUselocations] = useState({
        location: {"lat": 24.26694, "lng": -98.8362755},
        description: '',
        destination : '',
    })

    const updateStates = (key, value)=>{
        setUselocations((prev)=>({...prev, [key]: value}))
    }

    console.log(uselocations)


    // will use this chance to learn zustard state


    return (
        <View style={styles.container} className='container '>
            {/* Header */}
            <View style={styles.header} className='container h-full'>
                {/* maps */}
                <View className='h-full  '>
                    {/* trying to make the search hover on the map so the map fills the entire screeen  */}

                      {/* map content */}


                      <MapView
                            className='flex-1 z-0'
                            provider={"google"} // will use google map default provider null for native map
                            mapType="mutedStandard"
                            region={{
                                latitude: uselocations.location.lat,
                                longitude: uselocations.location.lng,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                        >
                            {uselocations?.location && (
                               
                                <Marker 
                                    coordinate={{
                                        latitude : uselocations.location.lat,
                                        longitude: uselocations.location.lng,
                                    }}
                                    title="MarkedLocation"
                                    description={uselocations.description}
                                    identifier="MarkedLocation"
                                />

                                
                            )}

                        </MapView>
                    
                        <GooglePlacesAutocomplete
                            className=''
                            placeholder='Where To ?'
                            styles={{
                                container: {
                                    flex: 0,
                                    zIndex : 10,
                                    position:'absolute',
                                    width: '100%',
                                    paddingTop: 10,
                                    paddingHorizontal: 10,

                                },
                                textInput: {
                                    fontSize: 18,
                                    borderWidth: 1,
                                }
                            }}
                            // currentLocation={true}
                            onPress={(data, details=null) => { console.log(data, details); updateStates('location', details.geometry.location ); updateStates('description', data.description ) }}
                            enablePoweredByContainer={false}
                            returnKeyType={'search'}
                            fetchDetails={true}
                            minLength={2}
                            nearbyPlacesAPI="GooglePlacesSearch"
                            debounce={400}
                            query={{
                                key: GOOGLE_MAPS_APIKEY,
                                language: "en",
                            }}
                        />
            
                </View>




            </View>

            <View style={styles.footer}>
                <Text className='text-center py-1 text-xl'>Choose a ride!</Text>
                <View>

                </View>


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
        flex: 8,
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