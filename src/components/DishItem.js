/**
 * Created by HP on 10-Dec-17.
 */
import React from 'react';
import {removeItem, removeAllSameItems, incrementItem} from '../actions/orders';
import {connect} from 'react-redux';

export const DishItem = (props) => (
    <div className="dishItem__content">
        <div className="dishItem__cropper">
            <img src={props.path} className="dishItem__img"/>
        </div>
        <h4 className="dishItem__title">{props.title}</h4>
        {props.orderPage ?
            <p><span className="lead">Price:  </span>{props.price * props.amount}</p>
            :
            <p><span className="lead">Price:  </span>{props.price}</p>
        }
        <p className="dishItem__description">{props.description}</p>
        {(props.amount > 0) && <p className="dishItem__amount"><span className="lead">Amount:  </span>{props.amount}</p>}
        {(props.orderPage && props.amount > 0) && (
            <div className="dishItem__buttonHolder">
                <button className="dishitem__removeone btn btn-primary" onClick={() => props.removeItem(props.title)}>-</button>
                <button className="dishitem__removeall btn btn-primary" onClick={() => props.removeAllSameItems(props.title)}>Remove All</button>
                <button className="dishitem__removeone btn btn-primary" onClick={() => props.addItem(props.title)}>+</button>
            </div>
        )}
    </div>
);

const mapDispatchToProps = (dispatch, props) => ({
    removeItem : (title) => dispatch(removeItem(title)),
    removeAllSameItems : (title) => dispatch(removeAllSameItems(title)),
    addItem : (title) => dispatch(incrementItem(title))
});


export default connect(undefined, mapDispatchToProps)(DishItem);