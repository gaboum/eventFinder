/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {getEvents, setError} from '../../actions/events';


class HomePage extends React.Component {

    /**
     *
     * Dispatches action which obtains nearby events
     */
    componentDidUpdate() {
        this.props.getEvents(this.props.location)
    }

    /**
     * Prevents component on infinite updating after receiving events from AJAX call
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.location.latitude !== nextProps.location.latitude;
    }


    render(){
        return(
            <h1>HomePage</h1>
        )
    }
}

const mapStateToProps = state => ({
    location : state.userData.location,
    events   : state.events.events
});

const mapDispatchToProps = dispatch => ({
    getEvents : (cords) => dispatch(getEvents(cords)),
    setError : (error) => dispatch(setError(error))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);