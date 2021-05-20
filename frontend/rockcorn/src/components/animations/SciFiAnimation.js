import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

class SciFiAnimation extends React.Component { 
    render () {   
      return (
        <Spritesheet          
          image={require("./scifi-sprite.png").default}
          widthFrame={364}
          heightFrame={160}          
          steps={8}    
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

export default SciFiAnimation;