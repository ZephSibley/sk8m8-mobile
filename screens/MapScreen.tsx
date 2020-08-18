import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { Text, View } from '../components/Themed';
import MapMarker from '../packages/trickspot/components/MapMarker';


export default function MapScreen() {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [mapMarkers, setMapMarkers] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}Mapmarker/Find?latitude=${location.latitude}&longitude=${location.longitude}&radius=100`)
      .then(response => response.json())
      .then(json => setMapMarkers(json.map(MapMarker)))
      //.catch()
  }, [location])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={location}
      >
        {mapMarkers}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
