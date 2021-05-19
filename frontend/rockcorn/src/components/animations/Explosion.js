import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

class Explosion extends React.Component { 
    render () {   
      return (
        <Spritesheet
          image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
          widthFrame={420}
          heightFrame={500}          
          steps={14}
          fps={10}
          loop={true}
        />
      );
    }
}

export default Explosion;