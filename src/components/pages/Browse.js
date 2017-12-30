/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'


import FiltersForm from '../FiltersForm';
import FiltersBar from '../FiltersBar';
import Event from '../Event';
import {getFilteredEvents} from '../../actions/events';
import {getUsersLocality} from '../../actions/userData';
import {filtersAreSame} from '../../helpers/compareFilters';
import LoadingOrElements from '../LoadingOrElements';




/**
 * Represents the Browse page
 */
class Browse extends React.Component {

    /**
     * Starts an AJAX request to obtain filtered events in accordance with user's input
     * Gets events baised on user's location on initial loac
     */
    componentDidMount() {
        this.props.getFilteredEvents(this.props);
    }


    /**
     * Gets filtered events accordingly with user's input
     * Dispatches a new AJAX request if filters were changed
     * @param nextProps
     */
    componentDidUpdate(nextProps){
        this.props.getUsersLocality(nextProps.userData.location);
        if (!filtersAreSame(nextProps.filters, this.props.filters)) {
            this.props.getFilteredEvents(this.props);
        }
    }


    render(){
        const events = this.props.events.map(ev => <Event key={ev.id}  event={ev}  />);

        return(
            <div className="browse-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <FiltersForm/>
                        </div>
                        <div className="col-md-9">
                            <FiltersBar/>
                            {LoadingOrElements(events, this.props.events.length)}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


/**
 * Validation of props
 * @type {{userData, filters}}
 */
Browse.propTypes = {
    userData : PropTypes.object.isRequired,
    filters  : PropTypes.object.isRequired,
};


/**
 * Mapping filters and user's data to props
 * @param state
 */
const mapStateToProps = state => ({
    filters      : state.filters,
    userData     : state.userData,
    events       : state.events.filteredEvents
});


/**
 * Mapping dispatching of filtered events AJAX and user locality AJAX to google API
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    getFilteredEvents : args => dispatch(getFilteredEvents(args)),
    getUsersLocality  : args => dispatch(getUsersLocality(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);


