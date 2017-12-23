/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

export const Header = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right">
            <NavLink className="navbar-brand" to="/">Caldira</NavLink>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/dishes">Menu</NavLink>
                    </li>
                    {props.haveItemsInOrder &&
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/order">Order</NavLink>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    </div>
);

const mapStateToProps = (state) => ({
    haveItemsInOrder : (state.orders.items.length > 0)
});

export default connect(mapStateToProps)(Header);