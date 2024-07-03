import React from "react";
import {Link} from "react-router-dom"
import './All.css'
function Navbar(){
    return  <div className="nav">
    <Link to='/'>HOME</Link>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
    <Link to='/cart'>Cart</Link>
    </div>
}
export default Navbar;