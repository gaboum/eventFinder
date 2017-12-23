/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {getEvents, setError} from '../../actions/events';


class HomePage extends React.Component {
    /*componentWillMount() {
        this.props.getEvents()
    }*/


    render(){
        this.props.getEvents();
        this.props.setError()
        return(
            <h1>HomePage</h1>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getEvents : () => dispatch(getEvents()),
    setError : () => dispatch(setError('epichi passasigi'))
});

export default connect(undefined, mapDispatchToProps)(HomePage);