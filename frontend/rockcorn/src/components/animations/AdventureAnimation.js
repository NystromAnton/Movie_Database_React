import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

class AdventureAnimation extends React.Component { 
    render () {   
      return (
        <Spritesheet          
          image={require("./explosion-sprite.png").default}
          widthFrame={256.125}
          heightFrame={251.25}          
          steps={32}    
          fps={20}
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

export default AdventureAnimation;