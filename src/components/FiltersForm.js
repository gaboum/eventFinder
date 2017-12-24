/**
 * Created by HP on 24-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {
    getCategories,
    setCategory,
    setLocation,
    setPrice,
    setType,
    setText,
    setToday,
    setTomorrow,
    setThisFriday,
    setThisWeek,
    setThisWeekend,
    setNextWeek,
    setThisMonth
} from '../actions/filters';

class FiltersForm extends React.Component {

    filters = {
        types      : ['class', 'seminar', 'seminar', 'expo', 'party', 'conference',
            'networking', 'rally', 'game', 'retreat', 'gala'],
        dates : ['today', 'tomorrow', 'this week', 'this friday', 'this weekend', 'next week', 'this month'],
        prices: ['all prices', 'paid', 'free']
    };

    componentWillMount() {
        this.props.getCategories();
    }


    getFilters() {
        const html = [];
        Object.keys(this.filters).forEach(key => {
            html.push(
                <div className="filterForm__filter" key={key}>
                    <div className="filterForm__group">{key}</div>
                    {this.filters[key].map((filter, i) => {
                       return  <div className="filterForm__control" key={i}>{filter}</div>
                    })}
                </div>
            )
        });
        return html;
    }

    render(){
        return (
            <div id="filterForm">
                <div className="filterForm__filter">
                    <div className="filterForm__group">Categories</div>
                    {this.props.categories.map((category, i) => {
                        return  <div className="filterForm__control" key={i}>{category.name}</div>
                    })}
                </div>
                {this.getFilters()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories : state.filters.allCategories,
});

const mapDispatchToProps = dispatch => ({
    getCategories : () => dispatch(getCategories()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm)

