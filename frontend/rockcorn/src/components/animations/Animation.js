import React from "react";
import Explosion from "./Explosion";
import AdventureAnimation from "./AdventureAnimation";
import ComedyAnimation from "./ComedyAnimation";
import ScaryAnimation from "./ScaryAnimation";
import SciFiAnimation from "./SciFiAnimation";

function Animation({genre}){      
  if(genre == "Action") {
    return (      
      <Explosion/>            
    );
  }
  else if(genre == "Horror") {
    return (
      <ScaryAnimation/>
    )
  }
  else if(genre == "Comedy") {
    return (
      <ComedyAnimation/>
    )
  }
  else if(genre == "Adventure") {
    return (
      <AdventureAnimation/>
    )
  }
  else if(genre == "Sci-Fi") {
    return (
      <SciFiAnimation/>
    )
  }
  else {
    return (
      <div></div>
    )
  }      
}

export default Animation;