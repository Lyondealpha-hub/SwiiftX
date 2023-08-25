import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import RideOptionsCard from './RideOptionsCard';

export default function MapsDirection() {

    const mapRef = useRef(null)

    const [uselocations, setUselocations] = useState({
        location: { "lat":24.26694 , "lng": -98.8362755 },
        description: '',
        destination: '',
        curLocation: {},
        errlocmsg: null,
    })

    const updateStates = (key, value) => {
        setUselocations((prev) => ({ ...prev, [key]: value }))
    }

    console.log(uselocations)


    // will use this chance to learn zustard state

    useEffect(() => {

        

        // get current location self function
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                updateStates(errlocmsg, 'Permission to access location was denied')
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            updateStates('curLocation', {lat: location.coords.latitude, lng: location.coords.longitude});

        })();

    }, [])

    let text = 'Waiting..';
    if (uselocations.errlocmsg) {
        text = uselocations.errlocmsg;
    } else if (uselocations.curLocation) {
        text = JSON.stringify(uselocations.curLocation);
    }


    useEffect(()=>{
        if(!uselocations.curLocation || !uselocations.location) return;

        // Zoom & fit to makers
        mapRef.current.fitToSuppliedMarkers(['current_location','destination'],{
            edgePadding : {top:50, right:80, bottom: 50, left:80},
        })

    }, [uselocations])

    return (
        <View style={styles.container} className='container '>
            {/* Header */}
            <View style={styles.header} className='container h-full'>
                {/* maps */}
                <View className='h-full  '>
                    {/* trying to make the search hover on the map so the map fills the entire screeen  */}

                    {/* map content */}


                    <MapView
                        ref={mapRef}
                        className='flex-1 z-0'
                        provider={undefined} // will use google map default provider null for native map
                        mapType="mutedStandard"
                        
                        region={{
                            latitude: uselocations.curLocation.lat,
                            longitude: uselocations.curLocation.lng,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        {uselocations.curLocation && uselocations.location &&  (
                            <MapViewDirections 
                                origin={{latitude : uselocations.curLocation.lat, longitude:uselocations.curLocation.lng}}
                                destination={{latitude: uselocations.location.lat, longitude:uselocations.location.lng}}
                                apikey={GOOGLE_MAPS_APIKEY}
                                strokeWidth={3}
                                strokeColor={'blue'}
                                language='en'
                            />
                        )}

                        {uselocations?.curLocation && (

                            <Marker
                                coordinate={{
                                    latitude: uselocations.curLocation.lat,
                                    longitude: uselocations.curLocation.lng,
                                }}
                                title="Current Location"
                                description={''}
                                identifier="current_location"
                            />


                        )}
                        {uselocations?.location && (

                            <Marker
                                coordinate={{
                                    latitude: uselocations.location.lat,
                                    longitude: uselocations.location.lng,
                                }}
                                title="Destination"
                                description={uselocations.description}
                                identifier="destination"
                            />


                        )}

                    </MapView>

                    <GooglePlacesAutocomplete
                        className=''
                        placeholder='Destination ... ?'
                        styles={{
                            container: {
                                flex: 0,
                                zIndex: 10,
                                position: 'absolute',
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
                        onPress={(data, details = null) => { console.log(data, details); updateStates('location', details.geometry.location); updateStates('description', data.description) }}
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
              <RideOptionsCard />
              {/* Checkout button */}
              <View className='container h-14 absolute px-5  inset-x-0 bottom-0  '>
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
        flex: 6,
        width: '100%',
        height: '100%',
    },

    footer: {
        flex: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'lightgrey',

    },
})