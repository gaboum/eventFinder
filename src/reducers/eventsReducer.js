/**
 * Created by HP on 23-Dec-17.
 */
import {SET_ERROR, SET_NEARBY, SET_FILTERED_EVENTS, REMOVE_FILTER, SAVE_EVENT} from '../actions/types';

const eventReducerDefaultState = {
    events : [],
    filteredEvents : [],
    errors  : '',
    newEventSaved : false,
};

export default (state=eventReducerDefaultState, action) => {
    switch(action.type) {
        case SET_ERROR:
            return {...state, errors : action.error};
        break;
        case SET_NEARBY:
            return {...state, events: action.events};
        case SET_FILTERED_EVENTS:
            return {...state, filteredEvents: action.events};
            break;
        case SAVE_EVENT:
            return {
                ...state,
                newEventSaved : true,
                errors : ''
            };
            break;
        default:
            return state;
    }

}