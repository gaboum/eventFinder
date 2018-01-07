/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


export const Footer = () => (
    <footer>
        <div className="footer__container">
            <ul className="footer__column">
                <li><p className="footer__column-header">Use our services</p></li>
                <li><NavLink className="footer__link" to="#">Vestibulum sit amet</NavLink></li>
                <li><NavLink className="footer__link" to="#">Fusce ut ligula</NavLink></li>
                <li><NavLink className="footer__link" to="#">Aenean eget enim</NavLink></li>
                <li><NavLink className="footer__link" to="#">Donec finibus ipsum</NavLink></li>
                <li><NavLink className="footer__link" to="#">Quis massa scelerisque</NavLink></li>
                <li><NavLink className="footer__link" to="#">Donec consequat </NavLink></li>
                <li><NavLink className="footer__link" to="#">Nunc quis augue mattis</NavLink></li>
                <li><NavLink className="footer__link" to="#">Ut erat metus</NavLink></li>
                <li><NavLink className="footer__link" to="#">Etiam consequat</NavLink></li>
                <li><NavLink className="footer__link" to="#">Aenean eget enim</NavLink></li>
            </ul>
            <ul className="footer__column">
                <li><p className="footer__column-header">Plan your activities</p></li>
                <li><NavLink className="footer__link" to="#">Vestibulum sit amet</NavLink></li>
                <li><NavLink className="footer__link" to="#">Fusce ut ligula</NavLink></li>
                <li><NavLink className="footer__link" to="#">Aenean eget enim</NavLink></li>
                <li><NavLink className="footer__link" to="#">Donec finibus ipsum</NavLink></li>
                <li><NavLink className="footer__link" to="#">Quis massa scelerisque</NavLink></li>
                <li><NavLink className="footer__link" to="#">Donec consequat </NavLink></li>
                <li><NavLink className="footer__link" to="#">Nunc quis augue mattis</NavLink></li>
                <li><NavLink className="footer__link" to="#">Ut erat metus</NavLink></li>
                <li><NavLink className="footer__link" to="#">Etiam consequat</NavLink></li>
                <li><NavLink className="footer__link" to="#">Aenean eget enim</NavLink></li>
            </ul>
            <ul className="footer__column">
                <li><p className="footer__column-header">Find events</p></li>
                <li><NavLink className="footer__link" to="#">Vestibulum sit amet</NavLink></li>
                <li><NavLink className="footer__link" to="#">Fusce ut ligula</NavLink></li>
                <li><NavLink className="footer__link" to="#">Aenean eget enim</NavLink></li>
                <li><NavLink className="footer__link" to="#">Donec finibus ipsum</NavLink></li>
                <li><NavLink className="footer__link" to="#">Quis massa scelerisque</NavLink></li>
                <li><NavLink className="footer__link" to="#">Donec consequat </NavLink></li>
                <li><NavLink className="footer__link" to="#">Nunc quis augue mattis</NavLink></li>
                <li><NavLink className="footer__link" to="#">Ut erat metus</NavLink></li>
                <li><NavLink className="footer__link" to="#">Etiam consequat</NavLink></li>
                <li><NavLink className="footer__link" to="#">Aenean eget enim</NavLink></li>
            </ul>
            <ul className="footer__social">
                <li><NavLink className="footer__social-link" to="#"><FontAwesome name="envelope"/> Contact us</NavLink></li>
                <li><NavLink className="footer__social-link" to="#"><FontAwesome name="facebook"/> Facebook</NavLink></li>
                <li><NavLink className="footer__social-link" to="#"><FontAwesome name="twitter"/> Twitter</NavLink></li>
                <li><NavLink className="footer__social-link" to="#"><FontAwesome name="linkedin"/> LinkedIn</NavLink></li>
                <li><NavLink className="footer__social-link" to="#"><FontAwesome name="instagram"/> Instagram</NavLink></li>
                <li><NavLink className="footer__social-link" to="#"><FontAwesome name="google-plus"/> Google+</NavLink></li>
            </ul>
        </div>
        <ul className="footer__nav">
            <li><NavLink className="footer__link-nav" to="#">About</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Blog</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Help</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Careers</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Press</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Security</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Developers</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Terms</NavLink></li>
            <li><NavLink className="footer__link-nav" to="#">Privacy</NavLink></li>
        </ul>
        <div className="footer__company">
            <p>Revent 2017 &copy;</p>
        </div>
    </footer>
);

export default Footer;