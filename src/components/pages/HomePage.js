/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getEvents, setError} from '../../actions/events';
import SearchForm from '../SearchForm';
import Event from '../Event';


class HomePage extends React.Component {

    /**
     *
     * Dispatches action which obtains nearby events
     */
    componentDidMount() {
        this.props.getEvents(this.props.location)
    }

    /**
     * Prevents component on infinite updating after receiving events from AJAX call
     * @param nextProps
     * @param _
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, _) {
        return this.props.events.length !== nextProps.events.length;
    }


    render(){
        return(
            <div className="homepage container=fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Home Page</h1>
                        <SearchForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.events.map(event => <Event key={event.id} event={event}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * Validation of props
 * @type {{location: *, events: *}}
 */
HomePage.propTypes = {
    location : PropTypes.object,
    events   : PropTypes.array,
};


/**
 * Mapping user's location alogn with nearby events to props
 * @param state
 */
const mapStateToProps = state => ({
    location : state.userData.location,
    events   : state.events.events
});


/**
 * Mapping dispatchers of getting nearby events and setting error to props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    getEvents : (cords) => dispatch(getEvents(cords)),
    setError : (error) => dispatch(setError(error))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);