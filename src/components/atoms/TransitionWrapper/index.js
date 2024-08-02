// components/TransitionWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Transition, animated } from 'react-spring';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();

    return (
        <Transition
            items={location}
            keys={location.pathname}
            from={{ opacity: 0, transform: 'translate3d(0, 3vh, 0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0, -3vh, 0)' }}
        >
            {(style) => (
                <animated.div style={style}>
                    {children}
                </animated.div>
            )}
        </Transition>
    );
};

export default TransitionWrapper;
