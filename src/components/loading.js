/**
 * Created by HP on 30-Dec-17.
 */
import React from 'react';

const Loading = props => (
    <div className="lds-css ng-scope loading-icon">
        <div style={{width:'100%', height:'100%'}} className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loading;