/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import moment from 'moment';
import { Editor } from '@tinymce/tinymce-react';
import { Input } from 'antd';

import DateTimeSet from '../DateTimeSet';
import FileUpload from '../FileUpload';
import Validator from '../../helpers/fieldValidator';



const CreateForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div className="create-event-container">
            <form className="create-event__form" onSubmit={handleSubmit}>
                <div className="create-event__fieldset">
                    <label htmlFor="title">Event Title</label>
                    <Field name="title" component={Input} type="text"/>
                </div>
                <div className="create-event__fieldset">
                    <label htmlFor="location">Location</label>
                    <Field name="location" component={Input} type="text" />
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
                <div className="create-event__fieldset">
                    <label htmlFor="start-date">End Date</label>
                    <Field
                        name="end-date"
                        component={DateTimeSet}
                        context="today"
                        defaultDate={moment()}
                        defaultTime={moment()}
                        type="text"
                    />
                </div>
                <div className="create-event__fieldset">
                    <Field name="picture" component={FileUpload}/>
                </div>
                <div className="create-event__fieldset">
                    <Field name="picture" component={Editor}
                           initialValue="<p>This is the initial content of the editor</p>"
                           init={{
                               plugins: 'link image code',
                               toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                           }}/>
                </div>
                <div className="create-event__fieldset">
                    <label htmlFor="title">Organizer Name</label>
                    <Field name="organizer_name" component={Input} type="text" />
                </div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

const validate = values => {
    const errors = {};
    if(!values.title){
        errors.title = 'Title is required';
    }
};


export default reduxForm({
    form: 'create',
    validate
})(CreateForm);