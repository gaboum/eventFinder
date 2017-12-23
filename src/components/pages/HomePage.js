/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {getEvents, setError} from '../../actions/events';


class HomePage extends React.Component {
    componentWillMount() {
        const getLocation = () => {
            const geolocation = navigator.geolocation;

            return  new Promise((resolve, reject) => {
                if (!geolocation) {
                    reject(new Error('Not Supported'));
                }

                geolocation.getCurrentPosition((position) => {
                    //console.log(position.coords);
                    resolve(position);
                }, () => {
                    reject(new Error('Permission denied'));
                });
            });
        };

        getLocation()
            .then(location => this.props.getEvents(location.coords));


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