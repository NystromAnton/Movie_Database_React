import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

class ScaryAnimation extends React.Component { 
    render () {   
      return (
        <Spritesheet          
          image={require("./scary-sprite.png").default}
          widthFrame={280}
          heightFrame={199}          
          steps={9}    
          fps={10}
          autoplay={false}
          loop={true}
          onMouseOver={spritesheet => {
            spritesheet.goToAndPlay(1);
          }}
          onMouseLeave={spritesheet => {
            spritesheet.goToAndPause(32);
          }}
        />
      );
    }
}

export default ScaryAnimation;