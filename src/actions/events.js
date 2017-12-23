/**
 * Created by HP on 23-Dec-17.
 */
import axios from 'axios';

import {SET_ERROR, SET_NEARBY} from './types';
import ENVIRONMENT from '../../ENV';

const ROOT_URL = ENVIRONMENT.eventbriteAPI.rootURL;

/**
 * Creates an AJAX request to eventbrite API
 * Gets random events if user does not permit obtaining of location
 * @param latitude
 * @param longitude
 */
export const getEvents = ({latitude, longitude}={}) => dispatch => {
    let URL = `${ROOT_URL}/events/search/`;
    URL += (latitude && longitude) ? `?location.latitude=${latitude}&location.longitude=${longitude}` : '';

    axios.get(`${URL}`,
        {
            headers : {Authorization : ENVIRONMENT.eventbriteAPI.OAuthToken}
        }
    )
        .then(response => {
            //console.log(response.data.events);
            dispatch(setNearby(response.data.events));
        })
        .catch(error => {
            console.log(error.response.data.error_description);
            dispatch(setError(error.response.data.error_description));
        });
};


/**
 * Sets error property to the Redux store
 * @param error
 */
export const setError = (error) => ({
    type : SET_ERROR,
    error
});

/**
 * Fills events property of the store with events obtained via AJAX in getEvents()
 * @param events
 */
export const setNearby = (events) =>({
    type : SET_NEARBY,
    events
});