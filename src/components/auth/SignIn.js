/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import Validator from '../../helpers/fieldValidator';
import {signUserIn} from '../../actions/userData';



const SignIn = props => {
    const { handleSubmit, pristine, reset, submitting, signIn } = props;
    return (
        <div className="signin-page">
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
                <button type="submit" disabled={submitting} className="btn btn-default">SignIN</button>
            </form>
        </div>
    )
};

const handleFormSubmit = (e, dispatch) => {
    console.log(e.email, e.password)
    dispatch(signUserIn(e.email, e.password))
};

const validate = values => {
    const errors = {};
    if (!Validator.isRequired(values.email)) errors.email = 'Please enter your email';
    if (!Validator.isValidEmail(values.email)) errors.email = 'Please enter a valid email';
    if (!Validator.isRequired(values.password)) errors.password = 'Please enter your password';
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


/*const mapDispatchToProps = dispatch => ({
    signIn : args => dispatch(signUserIn(args)),
});

const connectedSignInForm = connect(undefined, mapDispatchToProps)(SignIn);*/


export default reduxForm({
    form: 'signIn',
    validate,
    onSubmit : (e, dispatch) => handleFormSubmit(e, dispatch),
})(SignIn)