/**
 * Created by HP on 25-Dec-17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Event = props => {
    const {is_free, start, name, logo, description, end, id} = props.event;

    return (
        <div className="event">
            <Link className="event__link" to={`/event/${id}`}>
                <div className="event__picture-container">
                    <img src={logo.url} className="event__picture"/>
                    <div className="event__price-type">{is_free ? 'FREE' : ''}</div>
                </div>
                <div className="event__info-container">
                    <div className="event__date">{start.local}</div>
                    <div className="event__title">name.text</div>
                    <div className="event__description">{description.text ? description.text.substring(0, 100) + '..' : ''}</div>
                </div>
                <div className="event__footer">
                    <div className="event__tags">{end.timezone}</div>
                    <div className="event__save"></div>
                </div>
            </Link>
        </div>
    )
};

/**
 * Validating passing of event as a prop
 * @type {{event}}
 */
Event.propTypes = {
    event : PropTypes.object.isRequired,
};


export default Event;