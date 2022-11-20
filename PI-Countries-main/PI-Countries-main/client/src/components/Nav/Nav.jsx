import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
      <div>
        <Link to={"/"} ><p>Home</p></Link>
        <Link to={"/about"}><p>About</p></Link>
        <Link to={"/form"}><p>Create Videogame</p></Link>

      </div>
    );
  }
  
  export default Navbar;
  