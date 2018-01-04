/**
 * Created by HP on 04-Jan-18.
 */
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {getVenue} from '../../actions/events';


/**
 * Represent the Event page
 * @param props
 * @returns {XML}
 * @constructor
 */
const EventPage = props => {
    console.log(props.event);
    const { logo, name, is_free, description, start, end, venue_id} = props.event[0];
    getVenue(venue_id);
    return (
        <div className="event-page__background">
            <div className="event-page__info">
                <div className="event-page__header">
                    <div className="event-page__picture-holder">
                        <img src={logo && logo.url} className="event__picture"/>
                    </div>
                    <div className="event-page__basic-info">
                        <div className="event-page__start-date">
                            {start && moment(start.local).format('MMM Do')}
                        </div>
                        <div className="event-page__title">{name && name.text}</div>
                        {is_free && <div className="event__price-type">FREE</div>}
                    </div>
                </div>
                <div className="event-page__body">
                    <div className="event__description"><span>Description: </span>
                        {description.text ? description.text : ''}
                    </div>
                    <div className="event--page__date">
                        {start && moment(start.local).format('DD')} - {end && moment(end.local).format('DD MMM')}
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    event : (state.events.events.filter(ev => ev.id === props.match.params.id)
    || state.events.filteredEvents.filter(ev => ev.id === props.match.params.id))
});

export default connect(mapStateToProps, undefined)(EventPage);