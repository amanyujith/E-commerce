import React  from "react";
import { Link } from "react-router-dom";
function Orders(props){
    return <div>
        <h1>Orders</h1>
        <div className="orders">
        <label for="address">Enter your address:</label><br></br>
        <input type="text" id="address" name="address" placeholder="1234 Main St" required/><br></br>
        <Link to ="/ordersummary"><button className="po">Place Order</button></Link>
        </div>
    </div>
}
export default Orders;