/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/pages/HomePage';
import PageNotFound from '../components/pages/HomePage';
import Browse from '../components/pages/Browse';
import CreateEvent from '../components/pages/CreateEvent';
import SignUp from '../components/auth/SignIn';
import SignIn from '../components/auth/SignUp';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/browse" component={Browse} />
                <Route path="/create" component={CreateEvent} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;