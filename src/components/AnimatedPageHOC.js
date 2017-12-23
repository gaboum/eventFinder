/**
 * Created by HP on 23-Dec-17.
 */
/**
 * This is a HOC for animating pages on initial mount (all animations are specified in one place)
 */

import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

export default (AnimatedPage) => {
    class Animation extends React.Component {
        /*
        * Pipes each page through animation on initial mount
        * */
        render() {
            return (
                <CSSTransitionGroup
                    transitionName="mount-animation"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <AnimatedPage {...this.props}/>
                </CSSTransitionGroup>
            )
        }
    }
    return Animation;
}
