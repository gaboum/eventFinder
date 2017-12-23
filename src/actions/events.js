/**
 * Created by HP on 23-Dec-17.
 */
import axios from 'axios';

import ENVIRONMENT from '../../ENV';

const ROOT_URL = ENVIRONMENT.eventbriteAPI.rootURL;


export const getEvents = () => {
    return dispatch => {
        axios.get(ROOT_URL,
            {headers : {Authorization : 'Bearer ESEQ74FBDHKEOYMZCR7G'}}
            )
            .then(response => {
                dispatch({type : 'ADD_ERROR'})
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }
};


const addError = (error) => ({
    type : 'SET_ERROR',
    error
});