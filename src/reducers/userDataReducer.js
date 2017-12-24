/**
 * Created by HP on 25-Dec-17.
 */
import {} from '../actions/userData';
import {SET_USER_LOCATION} from '../actions/types';

const userDataReducerDefaultState = {
    location : {},
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
        default:
            return state;
    }
};