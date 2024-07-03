import React from "react";
import { Link } from "react-router-dom";
import All from "./All";
import Dress from "./Dress";
import Men from "./Men";
import both from '../both';
import man from "../man";
function Home(){
    return <div>
        <h1>Home</h1>
        <img src="/dress.webp"/>
        <div className="list">
        <h1>All</h1>
        <button><Link to='/all'>All</Link></button>
        <button><Link to='/men'>Men</Link></button>
        <button><Link to='/Women'>Women</Link></button> 
        </div>
        {both.map(item=>(
        <All
        key={item.key}
        img={item.img}
        name={item.name}
      />))}    </div>
}
export default Home;