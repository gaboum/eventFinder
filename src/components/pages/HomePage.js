/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {getEvents} from '../../actions/events';


class HomePage extends React.Component {
    componentWillMount() {
        this.props.getEvents()
    }


    render(){
        return(
            <h1>HomePage</h1>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getEvents : () => dispatch(getEvents()),
});



export default connect(undefined, mapDispatchToProps)(HomePage);