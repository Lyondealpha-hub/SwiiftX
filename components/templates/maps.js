import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import RideOptionsCard from './RideOptionsCard';
import { useSelectedRide } from '../store/useSelectedRide';
import { useNavigation } from '@react-navigation/native';

export default function MapsDirection() {


    const navigation = useNavigation()
    const mapRef = useRef(null)
    const selectedRide = useSelectedRide((state) => state.selectedRide)
    const { setGeneralValues } = useSelectedRide()

    const [uselocations, setUselocations] = useState({
        location: { "lat": 24.26694, "lng": -98.8362755 },
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
            // this give long and lat
            let location = await Location.getCurrentPositionAsync({});
            updateStates('curLocation', { lat: location.coords.latitude, lng: location.coords.longitude });

            // get the address name  by passing latitude and longitude
            let address = await Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude }, {})
            updateStates('description', (address[0].region + ", " + address[0].district + ", " + address[0].street + ", " + address[0].country));

            console.log("CURR ADDERS", address)

        })();



    }, [])

    let text = 'Waiting..';
    if (uselocations.errlocmsg) {
        text = uselocations.errlocmsg;
    } else if (uselocations.curLocation) {
        text = JSON.stringify(uselocations.curLocation);
    }

    // ZOOM TO FIT MAKERS
    useEffect(() => {
        if (!uselocations.curLocation || !uselocations.location) return;

        // Zoom & fit to makers
        mapRef.current.fitToSuppliedMarkers(['current_location', 'destination'], {
            edgePadding: { top: 50, right: 80, bottom: 50, left: 80 },
        })

    }, [uselocations])

    // getTravel Time

    useEffect(() => {
        if (!uselocations.curLocation || !uselocations.location) return;
        const getTrvelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${uselocations.description}&destinations=${uselocations.destination}&key=${GOOGLE_MAPS_APIKEY}`)
                .then((res) =>
                    res.json()
                ).then(data => {
                    console.log("hi", data.rows[0].elements[0])
                    setGeneralValues('setTravelTimeInfo', data?.rows[0]?.elements[0])

                });
        }

        getTrvelTime();

        setGeneralValues('clientLocationDetails', uselocations)
    }, [uselocations, GOOGLE_MAPS_APIKEY])

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
                        {uselocations.curLocation && uselocations.location && (
                            <MapViewDirections
                                origin={{ latitude: uselocations.curLocation.lat, longitude: uselocations.curLocation.lng }}
                                destination={{ latitude: uselocations.location.lat, longitude: uselocations.location.lng }}
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
                                description={uselocations.description}
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
                                description={uselocations.destination}
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
                                fontSize: '18px',
                                borderWidth: 1,
                            }
                        }}
                        // currentLocation={true}
                        onPress={(data, details = null) => { console.log("DESTINATION", data, details); updateStates('location', details.geometry.location); updateStates('destination', data.description); setGeneralValues('destinationD', data.description); }}
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
                    <TouchableOpacity onPress={() => { navigation.navigate('MyCart') }} disabled={selectedRide == undefined} className={`w-full mx-auto h-12 flex flex-row justify-center items-center ${selectedRide == undefined && 'bg-gray-200'}  bg-purple-400 rounded-xl`} >
                        <Text className='text-white text-lg   justify-center items-center'>{`Choose ${selectedRide?.title}`}</Text>
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
        backgroundColor: 'white',

    },
})