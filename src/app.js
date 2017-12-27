import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'antd/dist/antd.css';
import {SIGN_USER_IN} from './actions/types';

const store = ConfigureStore();

// authenticating user if there is a token already
const token = localStorage.getItem('token');
if (token) store.dispatch({type:SIGN_USER_IN,jwtToken:token});


ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>, document.getElementById('app')
);

