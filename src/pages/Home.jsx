import React from "react";
import { Link } from "react-router-dom";
import All from "./All";
import Dress from "./Dress";
import Men from "./Men";
import man from "../man";
function Home(){
    return <div>
        <h1>Home</h1>
        <img src="/dress.webp"/>
        {man.map(item=>(
        <Men
        key={item.key}
        img={item.img}
        name={item.name}
      />))}    </div>
}
export default Home;