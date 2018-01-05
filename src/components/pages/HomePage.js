/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BackgroundSlideshow from 'react-background-slideshow'

import {getEvents, setError} from '../../actions/events';
import SearchForm from '../SearchForm';
import Event from '../Event';
import LoadingOrElements from '../LoadingOrElements';
import img1 from '../../assets/img/ticket.jpg';
import img2 from '../../assets/img/concert.jpg';


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
        const events = this.props.events.map(event => <Event key={event.id} event={event}/>);
        return(
            <div className="homepage container=fluid">
                <section className="homepage__slider">
                    <img src="scripts/assets/ticket.jpg"/>
                </section>
                <section className="homepage__searchform">
                    <SearchForm/>
                </section>
                <div className="homepage__events">
                    {LoadingOrElements(events, this.props.events.length)}
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