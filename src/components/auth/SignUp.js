/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import Validator from '../../helpers/fieldValidator';
import {signUserUp} from '../../actions/userData';


/**
 * Represents signUp page
 */
class SignUp extends React.Component {

    /**
     * Redirect user after successful authorization
     */
    componentDidUpdate() {
        if(this.props.authenticated) {
            this.props.history.push('/');
        }
    }


    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="signup-page">
                <form onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        type="text"
                        component={renderField}
                        label="Email"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="password"
                    />
                    <Field
                        name="passwordConfirm"
                        type="password"
                        component={renderField}
                        label="password"
                    />
                    <button type="submit" disabled={submitting} className="btn btn-default">SignUp</button>
                    {this.props.authErrors && <p>{this.props.authErrors}</p>}
                </form>
            </div>
        )
    }
}

const handleFormSubmit = (e, dispatch) => {
    dispatch(signUserUp(e));
};

/**
 * Form validation object for validation errors displaying
 * @param values
 * @returns {{}}
 */
const validate = values => {
    const errors = {};
    if (!Validator.isRequired(values.email)) errors.email = 'Please enter your email';
    if (!Validator.isValidEmail(values.email)) errors.email = 'Please enter a valid email';
    if (!Validator.isRequired(values.password)) errors.password = 'Please enter your password';
    if (!Validator.passwordsAreEqual(values.password, values.passwordConfirm)) errors.passwordConfirm = 'Passwords don\'t match';
    if (!Validator.isStrongPassword(values.password)) errors.password = 'Your password should contain at least' +
        ' one uppercase, one lowercase, one digit and to be at least 8 characters long';
    return errors;
};


/**
 * This function is passed as a component in <Field/> and contains error messaging
 * @param input
 * @param label
 * @param type
 * @param touched
 * @param error
 * @param warning
 */
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const mapStateToProps = state =>({
    authenticated : state.userData.authenticated,
    authErrors    : state.userData.authErrors
});


const connectedFrom = connect(mapStateToProps, undefined)(SignUp);


export default reduxForm({
    form: 'signUp',
    validate,
    onSubmit : (e, dispatch) => handleFormSubmit(e, dispatch),
})(connectedFrom);