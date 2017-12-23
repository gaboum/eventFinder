/**
 * Created by HP on 30-Nov-17.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import EventReducer from '../reducers/eventsReducer';


const reducers = combineReducers({
    events : EventReducer,
});

export default () => {
    return createStore(
        reducers,
        ['Use Redux'],
        applyMiddleware(thunk),
        // this line is for not reloading page on clicking navlinks
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

