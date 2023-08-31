import { View, Text } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps';
import { useSelectedRide } from '../../store/useSelectedRide';
import MapViewDirections from 'react-native-maps-directions';


export default function Maps() {

    const mapRef = useRef(null)
    const zusStates = useSelectedRide((state) => state)

    // ZOOM TO FIT MAKERS
    useEffect(() => {
        if (!zusStates.clientLocationDetails?.curLocation || !zusStates.clientLocationDetails?.location) return;

        // Zoom & fit to makers
        mapRef.current.fitToSuppliedMarkers(['current_location', 'destination'], {
            edgePadding: { top: 100, right: 80, bottom: 100, left: 80 },
        })

    }, [zusStates?.clientLocationDetails])

    return (
        <View className='container h-full flex-0'>
            <MapView
                ref={mapRef}
                className='flex-1 z-0'
                provider={undefined} // will use google map default provider null for native map
                mapType="mutedStandard"

                region={{
                    latitude: zusStates?.clientLocationDetails?.curLocation?.lat,
                    longitude: zusStates?.clientLocationDetails?.curLocation?.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {zusStates?.clientLocationDetails?.curLocation && zusStates?.clientLocationDetails?.location && (
                    <MapViewDirections
                        origin={{ latitude: zusStates?.clientLocationDetails?.curLocation?.lat, longitude: zusStates?.clientLocationDetails?.curLocation?.lng }}
                        destination={{ latitude: zusStates?.clientLocationDetails?.location?.lat, longitude: zusStates?.clientLocationDetails?.location?.lng }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor={'blue'}
                        language='en'
                    />
                )}

                {zusStates?.clientLocationDetails?.curLocation && (

                    <Marker
                        coordinate={{
                            latitude: zusStates?.clientLocationDetails?.curLocation?.lat,
                            longitude: zusStates?.clientLocationDetails?.curLocation?.lng,
                        }}
                        title="Current Location"
                        description={zusStates?.clientLocationDetails?.description}
                        identifier="current_location"
                    />


                )}
                {zusStates.clientLocationDetails?.location && (

                    <Marker
                        coordinate={{
                            latitude: zusStates.clientLocationDetails.location.lat,
                            longitude: zusStates.clientLocationDetails.location.lng,
                        }}
                        title="Destination"
                        description={zusStates.clientLocationDetails.destination}
                        identifier="destination"
                    />


                )}

            </MapView>
        </View>
    )
}