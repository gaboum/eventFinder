/**
 * Created by HP on 23-Dec-17.
 */
import axios from 'axios';

import {SET_ERROR} from './types';
import ENVIRONMENT from '../../ENV';

const ROOT_URL = ENVIRONMENT.eventbriteAPI.rootURL;


export const getEvents = () => dispatch => {
    axios.get(`https://www.eventbriteapi.com/v3/users/me/`,
        {headers : {Authorization : ENVIRONMENT.eventbriteAPI.OAuthToken}}
    )
        .then(response => {
            dispatch(setError('OKejsdkl'));
            console.warn(response);
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