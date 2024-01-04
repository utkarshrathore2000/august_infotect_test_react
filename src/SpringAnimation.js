import './App.css';
import React from 'react';
import { useSpring, animated } from 'react-spring';



function SpringAnimation() {
  const props = useSpring({
    opacity:1,
    from:{opacity:0},
    config:{duration:500},
  });

  return (
    <animated.div style={props} className="App">
      <h4>Advanced animation and transition effects in a React application using libraries like React Spring</h4>
    </animated.div>      
  );
}

export default SpringAnimation;
