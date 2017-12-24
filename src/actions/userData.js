/**
 * Created by HP on 25-Dec-17.
 */
import {SET_USER_LOCATION, SET_USER_LOCALITY} from './types';
import {setError} from './events'
import ENV from '../../ENV';

import axios from 'axios';

/**
 * Sets user's location available for all connected components
 * @param location
 */
export const setUserLocation = location => ({
    type : SET_USER_LOCATION,
    location
});


/**
 * Gets user's city based on coordinates from google API
 * @param coord
 */
export const getUsersLocality = coord => dispatch => {
    let URL = `${ENV.googleAPI.rootURL}?latlng=${coord.latitude},${coord.longitude}&result_type=locality&key=${ENV.googleAPI.keyAPI}`;
    axios.get(URL)
        .then(resp => dispatch({type : SET_USER_LOCALITY, locality: resp.data.results[0].formatted_address}))
        .catch(err => dispatch(setError(err)));
};



