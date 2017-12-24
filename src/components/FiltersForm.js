/**
 * Created by HP on 24-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {LinkedComponent} from 'valuelink';
import {Input} from 'valuelink/tags';

import * as actions from '../actions/filters';
import {getFilteredEvents} from '../actions/events';

class FiltersForm extends LinkedComponent {

    state = {
        location : ''
    };

    /**
     * List of all filters apart categories
     * @type {{types: [*], dates: [*], prices: [*]}}
     */
    filters = {
        types      : ['class', 'seminar', 'seminar', 'expo', 'party', 'conference',
            'networking', 'rally', 'game', 'retreat', 'gala'],
        dates : ['today', 'tomorrow', 'this week', 'this friday', 'this weekend', 'next week', 'this month'],
        prices: ['all prices', 'paid', 'free']
    };

    /*
      * Gets list of categories from API
     */
    componentWillMount() {
       this.props.getCategories();
    }

    /**
     * Gets filtered events accordingly with user's input
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        this.props.getFilteredEvents(nextProps);
    }


    render(){
        return (
            <div id="filterForm">
                <Input type="text"
                       placeholder="Location"             /** YOU NEED TO REDO IT TO SHOW USER'S LOCATION **/
                       valueLink={this.linkAt('location')}
                       onBlur={(e) => this.props.setLocation(e.target.value)}/>

                <div className="filterForm__filter">
                    <div className="filterForm__group">Categories</div>
                    {this.props.categories.map((category, i) => (
                        <div
                            className="filterForm__control"
                            onClick={() => this.props.setCategory(category.id)}
                            key={i}>
                            {category.name}
                        </div>
                    ))}
                </div>
                /*<div className="filterForm__filter">
                    <div className="filterForm__group">Event Type</div>
                    {this.filters.types.map((filter, i) => (
                        <div
                            className="filterForm__control"
                            onClick={() => this.props.setType(filter)}
                            key={i}>
                            {filter}
                        </div>
                    ))}
                </div>*/
                <div className="filterForm__filter">
                    <div className="filterFrom__group">Price</div>
                    {this.filters.prices.map((pr, i) => (
                        <div key={i} className="filterForm__control" onClick={() => this.props.setPrice(pr)}>{pr}</div>
                    ))}
                </div>
                <div className="filterForm__filter">
                    <div className="filterForm__group">Date</div>
                    <div className="filterForm__control" onClick={() => this.props.setToday()}>Today</div>
                    <div className="filterForm__control" onClick={() => this.props.setTomorrow()}>Tomorrow</div>
                    <div className="filterForm__control" onClick={() => this.props.setThisFriday()}>This Friday</div>
                    <div className="filterForm__control" onClick={() => this.props.setThisWeek()}>This Week</div>
                    <div className="filterForm__control" onClick={() => this.props.setThisWeekend()}>This Weekend</div>
                    <div className="filterForm__control" onClick={() => this.props.setNextWeek()}>Next Week</div>
                    <div className="filterForm__control" onClick={() => this.props.setThisMonth()}>This Month</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories   : state.filters.allCategories,
    filters      : state.filters,
    userLocation : state.userData.location
});


/**
 * There were to many actions to write them all, so I looped over the action object
 * filling the dispatcher object with key-value pairs and returning it in the end
 * @param dispatch
 * @returns {{}}
 */
const mapDispatchToProps = dispatch => {
    const dispatchers = {};

    Object.keys(actions).forEach(action => {
        dispatchers[action] = (arg) => dispatch(actions[action](arg));
    });

    dispatchers.getFilteredEvents = (arg) => dispatch(getFilteredEvents(arg));

    return dispatchers;
};


export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm)

