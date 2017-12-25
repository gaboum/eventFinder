/**
 * Created by HP on 25-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


/**
 * Represents filter bar on the browse events page
 * @param props
 * @constructor
 */
const FiltersBar = props => (
    <div className="filter-bar" style={{border: 'red 1px solid'}}>
        {filters({...props.filters})}
    </div>
);


/**
 * Loop for getting divs with names of filters
 * @param list
 * @returns {Array}
 */
const filters = list => {
    delete list.allCategories;
    const filters = [];
    for (const filter in list){
        filters.push(<div key={filter}>{list[filter]}</div>)
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

});

export default connect(mapStateToProps, undefined)(FiltersBar);