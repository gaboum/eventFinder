/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => (
    <div className="footer__fix">

        <footer>
            <ul className="footer__links">
                <li><NavLink className="footer__link text-center" to="/about">About Us</NavLink></li>
                <li><NavLink className="footer__link text-center" to="#">Sign Up For News</NavLink></li>
            </ul>
            <ul className="footer__info">
                <li>
                    <p id="footer__info">Our office is located 24, Rd No 2 Krong Battambang.
                        We are open 8a.m. to 5p.m Monday to Friday.</p>
                </li>
            </ul>
        </footer>
    </div>
);

export default Footer;