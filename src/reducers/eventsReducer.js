/**
 * Created by HP on 23-Dec-17.
 */
import {SET_ERROR, SET_NEARBY} from '../actions/types';

const eventReducerDefaultState = {
    events : [],
    error  : '',
};

export default (state=eventReducerDefaultState, action) => {
    switch(action.type) {
        case SET_ERROR:
            return {...state, error : action.error};
        break;
        case SET_NEARBY:
            return {...state, events: action.events};
        default:
            return state;
    }

}