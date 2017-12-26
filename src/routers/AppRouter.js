/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/pages/HomePage';
import PageNotFound from '../components/pages/HomePage';
import Browse from '../components/pages/Browse';
import CreateEvent from '../components/pages/CreateEvent';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import RequireAuth from '../components/auth/RequireAuth';
import AnimatedPage from '../components/pages/AnimatedPageHOC';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={AnimatedPage(HomePage)} exact={true}/>
                <Route path="/browse" component={AnimatedPage(Browse)} />
                <Route path="/create" component={AnimatedPage(RequireAuth(CreateEvent))} />
                <Route path="/signup" component={AnimatedPage(SignUp)} />
                <Route path="/signin" component={AnimatedPage(SignIn)} />
                <Route component={AnimatedPage(PageNotFound)}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;