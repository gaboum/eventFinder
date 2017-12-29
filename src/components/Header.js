/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

export const Header = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right">
            <NavLink className="navbar-brand" to="/">Revent</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/browse">Browse</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/create">Create</NavLink>
                    </li>
                    {props.authenticated
                    ?
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/signout">Sign OUT</NavLink>
                        </li>
                    :
                        [
                            <li className="nav-item" key="1">
                                <NavLink activeClassName="active" className="nav-link" to="/signup">Sign Up</NavLink>
                            </li>,
                            <li className="nav-item" key="2">
                                <NavLink activeClassName="active" className="nav-link" to="/signin">Sign In</NavLink>
                            </li>
                        ]
                    }
                </ul>
            </div>
        </nav>
    </div>
);

const mapStateToProps = (state) => ({
    authenticated : state.userData.authenticated
});

export default connect(mapStateToProps, undefined)(Header);