/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import moment from 'moment';

import DateTimeSet from '../DateTimeSet'

class CreateEvent extends React.Component {

    render(){
        return (
            <div className="create-event-container">
                <form className="create-event__form" onSubmit={this.submit}>
                    <div className="create-event__fieldset">
                        <label htmlFor="title">Event Title</label>
                        <Field name="title" component="input" type="text" />
                    </div>
                    <div className="create-event__fieldset">
                        <label htmlFor="location">Location</label>
                        <Field name="location" component="input" type="text" />
                    </div>
                    <div className="create-event__fieldset">
                        <label htmlFor="start-date">Start Date</label>
                        <Field
                            name="start-date"
                            component={DateTimeSet}
                            context="today"
                            defaultDate={moment()}
                            defaultTime={moment()}
                            type="text"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const connectedForm = connect()(CreateEvent);

export default reduxForm({
    form: 'create'
})(connectedForm);