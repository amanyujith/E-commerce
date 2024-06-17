import React from "react";
import { Link } from "react-router-dom";
function All(props){
    return <div>
        <h1>Allll</h1>
        <button><Link to='/all'>All</Link></button>
        <button><Link to='/men'>Men</Link></button>
        <button><Link to='/Women'>Women</Link></button> 

        <div>
        <img src={props.img}/>
            <h1>{props.name}</h1>
            <button><Link to='/orders'>Buy Now</Link></button>
            <button><Link to='/cart'>Add To cart</Link></button>


        </div>
    </div>
}
export default All;