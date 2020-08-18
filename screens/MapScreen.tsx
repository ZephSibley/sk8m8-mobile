import * as React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { Text, View } from '../components/Themed';

export default function MapScreen() {
  const [location, setLocation] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={location}
      />
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
