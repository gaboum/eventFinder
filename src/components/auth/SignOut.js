/**
 * Created by HP on 27-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux'
import {signUserOut} from '../../actions/userData';


/**
 * This component shows by-by message on user sign out
 */
class SignOut extends React.Component {

    /**
     * Signing out user and redirecting to the homepage
     */
    componentDidMount() {
        this.props.signOut();
        setTimeout(() => {
            this.props.history.push('/');
        }, 3000)
    }

    render() {
        return (
            <h1>Sory to see you go</h1>
        )
    }
}


/**
 * Mapping authenticated flag and signout dispatcher to props
 * @param state
 */
const mapStateToProps = state => ({
    authenticated : state.userData.authenticated,
});

const mapDispatchToProps = dispatch => ({
    signOut : () => dispatch(signUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);