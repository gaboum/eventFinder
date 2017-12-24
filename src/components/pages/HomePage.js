/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {getEvents, setError} from '../../actions/events';


class HomePage extends React.Component {

    /**
     *
     * Gets user's location and dispatches action which obtains nearby events
     *
     */
    componentDidMount() {
        /*this.props.getLocation()
            .then(location => this.props.getEvents(location.coords))
            .catch(err => this.props.setError(err))
        ;*/
    }


    render(){
        return(
            <h1>HomePage</h1>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getEvents : (cords) => dispatch(getEvents(cords)),
    setError : (error) => dispatch(setError(error))
});

export default connect(undefined, mapDispatchToProps)(HomePage);