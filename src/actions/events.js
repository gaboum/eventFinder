/**
 * Created by HP on 23-Dec-17.
 */
import axios from 'axios';

import {SET_ERROR} from './types';
import ENVIRONMENT from '../../ENV';

const ROOT_URL = ENVIRONMENT.eventbriteAPI.rootURL;


export const getEvents = ({latitude, longitude}={}) => dispatch => {
    let URL = `${ROOT_URL}/events/search/`;
    URL += (latitude && longitude) ? `?location.latitude=${latitude}&location.longitude=${longitude}` : '';
    console.log(URL)
    axios.get(`${URL}`,
        {
            headers : {Authorization : ENVIRONMENT.eventbriteAPI.OAuthToken}
        }
    )
        .then(response => {
            console.log(response.data.events);
        })
        .catch(error => {
            console.warn(error.response.data);
            dispatch(setError(error.response.data.error_description));
        });
};


export const setError = (error) => ({
    type : SET_ERROR,
    error
});