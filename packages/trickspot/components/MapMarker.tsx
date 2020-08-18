import React, { FunctionComponent } from 'react';
import { Marker } from 'react-native-maps';
import { MapMarker } from '../models/MapMarker';

const MapMarker: FunctionComponent<MapMarker> = ({ id, coords }) => {
  return (
    <Marker
      identifier={id.toString()}
      coordinate={{ latitude: coords[0], longitude: coords[1] }}
    >

    </Marker>
  )
}

export default MapMarker
