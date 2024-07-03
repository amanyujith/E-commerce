import React from "react";
import { Link } from "react-router-dom";
function Men(props){
    return <div className="men">
            <img src={props.img}/>
            <h1>{props.name}</h1>
            <button><Link to='/orders'>Buy Now</Link></button>
            <button><Link to='/cart'>Add To cart</Link></button>

      
    </div>
   
}
export default Men;