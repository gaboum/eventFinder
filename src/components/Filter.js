/**
 * Created by HP on 30-Dec-17.
 */
import React from 'react';
import PropTypes from 'prop-types';


const Filter = props => {
    return (
        <div className="filter-bar__filter-element"
             onClick={props.onClick}>{props.title}
            <span className="filter-bar__remove">x</span>
        </div>
    )
};

Filter.proptypes = {
    onClick: PropTypes.func.isRequired,
    title  : PropTypes.string.isRequired
};

export default Filter;