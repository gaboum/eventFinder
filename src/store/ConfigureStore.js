/**
 * Created by HP on 30-Nov-17.
 */
import {createStore, combineReducers} from 'redux';


export default () => {
    const store = createStore(combineReducers({

    }),
        // this line is for not reloading page on clicking navlinks
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

