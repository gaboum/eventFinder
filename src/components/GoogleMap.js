/**
 * Created by HP on 05-Jan-18.
 */
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap(props => {
   const lat = parseFloat(props.latitude);
   const long = parseFloat(props.longitude);
   console.log(lat, long)
   return (
       <GoogleMap
           defaultZoom={8}
           defaultCenter={{lat:lat, lng: long}}
       >
           {props.isMarkerShown && <Marker position={{lat: lat, lng: long}}/>}
       </GoogleMap>
   )
}));

export default Map;