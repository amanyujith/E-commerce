import React  from "react";
function Orders(props){
    return <div>
        <h1>Orders</h1>
        <div>
            <img src={props.img}/>
            <h1>{props.name}</h1>
            </div>
    </div>
}
export default Orders;