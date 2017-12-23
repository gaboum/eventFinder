/**
 * Created by HP on 23-Dec-17.
 */
import {combineReducers} from 'redux';

import EventReducer from '../reducers/eventsReducer';


/**
 * Combines all reducers to one root one
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
    events : EventReducer,
});

export default rootReducer;