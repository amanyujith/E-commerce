import React from "react";
import { Link } from "react-router-dom";
import "./All.css";
function All(props){
    return  <div class="men">
        <div className="color">
        <img src={props.img}/>
            <h1>{props.name}</h1>
            <button className="order"><Link to='/orders'>Buy Now</Link></button>
            <button className="order"><Link to='/cart'>Add To cart</Link></button>

</div>
        
    </div>
}
export default All;