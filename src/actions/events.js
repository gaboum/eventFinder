/**
 * Created by HP on 23-Dec-17.
 */
import axios from 'axios';

import {SET_ERROR, SET_NEARBY, SET_FILTERED_EVENTS} from './types';
import ENV from '../../ENV';

const ROOT_URL = ENV.eventbriteAPI.rootURL;

/**
 * Creates an AJAX request to eventbrite API
 * Gets random events if user does not permit obtaining of location
 * @param latitude
 * @param longitude
 */
export const getEvents = ({latitude, longitude}={}) => dispatch => {
    let URL = `${ROOT_URL}/events/search/`;
    URL += (latitude && longitude) ? `?location.latitude=${latitude}&location.longitude=${longitude}` : '';
    //console.log(URL)
    axios.get(`${URL}`,
        {
            headers : {Authorization : ENV.eventbriteAPI.OAuthToken}
        }
    )
        .then(response => {
            //console.log(response.data.events);
            dispatch(setNearby(response.data.events));
        })
        .catch(error => {
            // console.log(error.response.data.error_description);
            dispatch(setError(error.response.data.error_description));
        });
};


/**
 * Gets filtered events in accordance with user's input
 * @param props
 * @returns {function(*)}
 */
export const getFilteredEvents = (props = {}) =>   {

    return dispatch => {

        const {category, price, typeOfE, location, startRange, endRange} = props.filters;
        const {latitude, longitude} = props.userData.location;

        let URL = `${ROOT_URL}/events/search/?`;
        URL += latitude && longitude ? `location.latitude=${latitude}&location.longitude=${longitude}&` : '';
        URL += category ? `categories=${category}&` : '';
        URL += typeOfE ? `q=${typeOfE}&`: '';
        URL += price ? `price=${price === 'free' ? 'free' : 'paid'}&` : '';
        URL += location ? `location.address=${location.trim()}&` : '';
        URL += startRange ? `start_date.range_start=${adjustTimestamps(startRange)}&` : '';
        URL += endRange   ? `start_date.range_end=${adjustTimestamps(endRange)}` : '';

        //console.log(URL);
        axios.get(URL, { headers : {Authorization : ENV.eventbriteAPI.OAuthToken}})
            .then(resp => {
                console.log(resp);
                dispatch({type : SET_FILTERED_EVENTS, events: resp.data.events})
            })
            .catch(err => console.log(err.response.data.error_description))
    }
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

/**
 * Adjasts timestamp to the format which is required by eventbrite API
 * @param timeStamp
 */
const adjustTimestamps = timeStamp => timeStamp.replace(' ', 'T');