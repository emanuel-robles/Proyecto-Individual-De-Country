import React from "react";
import {useParams} from "react-router-dom"
function Detail() {
  let {name} = useParams()
  return (
      <div>
       <h1>{name}</h1>
      </div>
    );
  }

  export default Detail;
  