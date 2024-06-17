import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return  <div>
    <Link to='/'>HOME</Link>
    <Link to='/login'>Login</Link>
    <Link to='/cart'>Cart</Link>
    </div>
}
export default Navbar;