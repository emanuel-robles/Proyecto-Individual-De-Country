import React from "react";
import { Link } from "react-router-dom";
function Card({name,flags,region}) {
    return (
     
      <div>
         <Link to={`detail/${name}`} >
        <p>{name}</p>
        <img src={flags} alt="imagen" />
        <p>{region}</p>
        </Link>
      </div>
    );
  }
  
  export default Card;
  