/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import FiltersForm from '../FiltersForm';
import {getFilteredEvents} from '../../actions/events';
import {getUsersLocality} from '../../actions/userData';



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
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        this.props.getUsersLocality(nextProps.userData.location)
    }



    render(){
        return(
            <div id="browsePage">
                <FiltersForm/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters      : state.filters,
    userData     : state.userData
});

const mapDispatchToProps = dispatch => ({
    getFilteredEvents : args => dispatch(getFilteredEvents(args)),
    getUsersLocality  : args => dispatch(getUsersLocality(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);


