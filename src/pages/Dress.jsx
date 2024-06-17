import React from "react";
import { Link } from "react-router-dom";
function Dress(){
    return <div>
<button><Link to='/all'>All</Link></button>
        <button><Link to='/men'>Men</Link></button>
        <button><Link to='/Women'>Women</Link></button>    </div>
}
export default Dress;