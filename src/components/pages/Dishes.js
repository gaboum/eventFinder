/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import { connect } from 'react-redux';
import DishItem from './../DishItem';
import visibleDishes from '../../selectors/visibleDishes';
import getRowsOfDishes from '../../adapters/chunk';
import DishesFilterForm from '../DishesFilterForm';
import { addItem, removeItem, fillCredentials } from '../../actions/orders';


export class Dishes extends React.Component {
    handleAddButton = (item) => {
        this.props.addItemToOrder(item)
    };

    getAddedTitles = () => {
        return [...this.props.items].map(item => item.title);
    };

    render(){
        return (
            <div>
                <section className="dishesFilterForm">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <DishesFilterForm/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dishList">
                    <div className="container-fluid">
                        {getRowsOfDishes(3, this.props.dishes, false, this.handleAddButton, this.getAddedTitles())}
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dishes : visibleDishes(state.filter.filterBy, state.filter.text),
    items  : state.orders.items
});

const mapDispatchToProps = (dispatch, props) => ({
    addItemToOrder : (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);