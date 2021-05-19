import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

class Explosion extends React.Component { 
    render () {   
      return (
        <Spritesheet          
          image={require("./spriteimage.png").default}
          widthFrame={420}
          heightFrame={500}          
          steps={14}    
          fps={10}
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