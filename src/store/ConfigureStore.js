/**
 * Created by HP on 30-Nov-17.
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import EventReducer from '../reducers/eventsReducer';


const rootReducer = combineReducers({
    events : EventReducer,
});


/**
 *
 * ComposeEnhancer is necessary for simultaneous work of thunk and devtools
 *
 */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

export default () => {
    const store = createStore(
        rootReducer,
        enhancer
    );
    return store;
}

