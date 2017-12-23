/**
 * Created by HP on 30-Nov-17.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import EventReducer from '../reducers/eventsReducer';


const rootReducer = combineReducers({
    events : EventReducer,
});

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk),
        /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

