import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

class Explosion extends React.Component { 
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
            spritesheet.play();
          }}
          onMouseLeave={spritesheet => {
            spritesheet.pause();
          }}
        />
      );
    }
}

export default Explosion;