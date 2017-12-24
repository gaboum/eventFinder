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
        categories : this.props.categories,
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
                <div>
                    <div>{key}</div>
                    {this.filters[key].map(filter => {
                       return  <div>{filter}</div>
                    })}
                </div>

            )
        });
        return html;
    }

    render(){
        return (
            <div id="filterForm">
                <div className="filterForm__container">
                    {this.getFilters()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    categories : state.filters.allCategories,
});

const mapDispatchToProps = dispatch => ({
    getCategories : () => dispatch(getCategories()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm)

