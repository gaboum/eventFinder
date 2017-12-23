/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => (
    <div className="footer__fix">

        <footer>
            <ul className="footer__links">
                <li><NavLink className="footer__link text-center" to="/about">**</NavLink></li>
                <li><NavLink className="footer__link text-center" to="#">***</NavLink></li>
            </ul>
            <ul className="footer__info">
                <li>
                    <p id="footer__info">*********</p>
                </li>
            </ul>
        </footer>
    </div>
);

export default Footer;