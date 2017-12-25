/**
 * Created by HP on 25-Dec-17.
 */
import React from 'react';

export default props => (
    <div className="event">
        <a className="event__link">
            <div className="event__picture">
                <img scr={}/>
                <div className="event__price-type">PRICE</div>
            </div>
            <div className="event__info-container">
                <div className="event__date">Date</div>
                <div className="event__title">title</div>
                <div className="event__venue">venue</div>
            </div>
            <div className="event__footer">
                <div className="event__tags"></div>
                <div className="event__save"><a></a></div>
            </div>
        </a>
    </div>
);