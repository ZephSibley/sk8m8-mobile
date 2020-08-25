import React, { useEffect, useState } from 'react';

import { Text, View } from '../../../components/Themed'
import MarkerStar from './MarkerStar';

const MarkerContent = (markerId: number) => {
  const [markerDetails, updateMarkerDetails] = useState({
    name: '',
    locationCategory: '',
    username: '',
    starCount: 0,
    hasStarred: false,
  })

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}mapmarker/details?id=${markerId}`)
      .then(response => response.json())
      .then(json =>
        json !== null ? updateMarkerDetails(json)
          : updateMarkerDetails({ ...markerDetails, name: 'Something went wrong' }))
      .catch(e => {
        e.response && e.response.status === 401 ?
            updateMarkerDetails({
                name: '',
                locationCategory: 'Please Log in or sign up to view marker details',
                username: '',
                starCount: 0,
                hasStarred: false,
            })
            :
            updateMarkerDetails(m => m.name = e.message)
    });
  }, [markerId]);

  return (
    <View>
      <Text>{markerDetails.name}</Text>
      <Text>{markerDetails.locationCategory}</Text>
      <Text>Created by: {markerDetails.username}</Text>
      <MarkerStar
        markerId={markerId}
        starCount={markerDetails.starCount}
        hasStarred={markerDetails.hasStarred}
      />
    </View>
  )
}

export default MarkerContent;
