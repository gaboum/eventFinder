/**
 * Created by HP on 25-Dec-17.
 */
import {} from '../actions/userData';
import {SET_USER_LOCATION, SET_USER_LOCALITY} from '../actions/types';

const userDataReducerDefaultState = {
    location : {},
    locality : ''
};

export default (state=userDataReducerDefaultState, action) => {
    switch(action.type) {
        case SET_USER_LOCATION:
            return {
                ...state,
                location : {
                    latitude  : action.location.latitude,
                    longitude : action.location.longitude
                }
            };
            break;
        case SET_USER_LOCALITY:
            return {
                ...state,
                locality : action.locality
            };
            break;
        default:
            return state;
    }
};