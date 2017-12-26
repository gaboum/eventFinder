/**
 * Created by HP on 23-Dec-17.
 */
/**
 * This is a HOC for authentication purposes
 * @param ComposedComponent
 * @returns {Authentication}
 */
import React from 'react';
import {connect} from 'react-redux';


export default (ComposedComponent) => {
    class Authentication extends React.Component {

        /*static contextTypes = {
            router : React.PropTypes.object,
        };*/

        /**
         * If user isn't authenticated, redirect him on component mount
         */
        componentWillMount() {
            if(!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        /**
         * Redirects user from the component after one sign out
         * @param nextProps
         */
        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.props.history.push('/');
            }
        }

        /**
         * Renders a passed component (pages which require authentication in this case)
         * @returns {XML}
         */
        render() {
            return <ComposedComponent {...this.props}/>
        }
    }

    const mapStateToProps = state => ({
        authenticated : true
    });


    return connect(mapStateToProps, undefined)(Authentication);
}