import React from "react";
import Explosion from "./Explosion";

function Animation({genre}){      
  if(genre == "Action") {
    return (
      <div>
         <Explosion/>
      </div>       
    );
  }
  else {
    return (
      <div>NEJ</div>
    )
  }      
}

export default Animation;