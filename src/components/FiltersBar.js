/**
 * Created by HP on 25-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {removeFilter} from '../actions/filters';
import Filter from './Filter';


/**
 * Represents filter bar on the browse events page
 * @param props
 * @constructor
 */
const FiltersBar = props => (
    <div className="filter-bar">
        {filters({...props.filters}, props.removeFilter)}
    </div>
);


/**
 * Loop for getting divs with names of filters
 * @param list
 * @param dispatch
 * @returns {Array}
 */
const filters = (list, dispatch) => {
    delete list.allCategories;
    delete list.category;
    delete list.startRange;
    delete list.endRange;
    const filters = [];
    for (const filter in list){
        if (list[filter]){
            filters.push(
                <Filter
                    key={filter}
                    title={list[filter]}
                    onClick={() => dispatch(removeFilter(filter))}/>
                    )
        }
    }
    return filters;
};


/**
 * Validation of props
 * @type {{filters}}
 */
FiltersBar.propType = {
    filters : PropTypes.object.isRequired
};



/**
 * Mapping filters object from Redux store
 * @param state
 */
const mapStateToProps = state => ({
    filters : state.filters,
});



/**
 * Mapping removing filters actions to props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    removeFilter : filter => dispatch(removeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);