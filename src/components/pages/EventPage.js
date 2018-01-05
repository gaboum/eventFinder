/**
 * Created by HP on 04-Jan-18.
 */
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {getVenue, resetVenue} from '../../actions/events';
import {findEventById} from '../../selectors/events';


/**
 * Represent the Event page
 * @param props
 * @returns {XML}
 * @constructor
 */
class EventPage extends React.Component {


    /**
     * Fulfils an AJAX request to get venue's info
     */
    componentDidMount() {
        this.props.setVenue(this.props.event[0].venue_id);
    }



    /**
     * Sets current venue to an empty object when uset leaves the page
     */
    componentWillUnmount() {
        this.props.resetVenue();
    }



    render() {
        const { logo, name, is_free, description, start, end} = this.props.event[0];
        const {address_1, address_2, city, country, name : venue_name} = this.props.venue;

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
                        <div className="event--page__date">
                            {start && moment(start.local).format('DD')} - {end && moment(end.local).format('DD MMM')}
                        </div>
                        <div className="event-page__description"><span>Description: </span>
                            {description.text ? description.text : ''}
                        </div>
                        <div className="event-page__venue">
                            <div className="event-page__venue-element">{address_1 && <p>{address_1}</p>}</div>
                            <div className="event-page__venue-element">{address_2 && <p>{address_2}</p>}</div>
                            <div className="event-page__venue-element">{city && <p>{city}</p>}</div>
                            <div className="event-page__venue-element">{country && <p>{country}</p>}</div>
                            <div className="event-page__venue-element">{venue_name && <p>{venue_name}</p>}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    event : findEventById(state, props.match.params.id),
    venue : state.events.currentEventVenue
});



const mapDispatchToProps = dispatch => ({
    setVenue : id => dispatch(getVenue(id)),
    resetVenue : () => dispatch(resetVenue()),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventPage);