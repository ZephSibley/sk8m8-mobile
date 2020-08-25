import React, { useEffect, useState, FunctionComponent } from 'react';

// TODO: Figure out how icons work

import MarkerStar from '../models/MarkerStar';

const MarkerStar: FunctionComponent<MarkerStar> = ({
  markerId,
  starCount,
  hasStarred
}) => {
  const [starred, setStarred] = useState(hasStarred);

  useEffect(() => {
    setStarred(hasStarred)
  }, [hasStarred]);

  const starMarker = () => {
    fetch(`${process.env.REACT_APP_ENDPOINT}mapmarker/starmarker?markerId=${markerId}`,
      {
        method: 'POST'
      }
    ).then(r => setStarred(true))
    // TODO: catch (set some text)
  }

  const unstarMarker = () => {
    fetch(`${process.env.REACT_APP_ENDPOINT}mapmarker/unstarmarker?markerId=${markerId}`,
      {
        method: 'DELETE'
      }
    ).then(r => setStarred(false))
    // TODO: catch
  }

  return (
    <span>
      {/* {starred ?
                <StarIcon style={{ color: yellow[500] }} onClick={unstarMarker} /> :
                <StarBorderIcon style={{ color: yellow[500] }} onClick={starMarker} />
            } */}
      {starCount}
    </span>
  )
}

export default MarkerStar;
