import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import './App.css';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home';
import All from './pages/All';
import Dress from './pages/Dress';
import Men from './pages/Men';
import Women from './pages/Women';
import Orders from './pages/Orders';
import man from './man';
import woman from './woman';
import both from './both';
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/all' element={both.map(item=>(
        <All
        key={item.key}
        img={item.img}
        name={item.name}
      />))}/>
      <Route path='/men' element={man.map(item=>(
        <Men
        key={item.key}
        img={item.img}
        name={item.name}
      />))}/>
      <Route path='/women' element={woman.map(item=>(
        <Women
        key={item.key}
        img={item.img}
        name={item.name}
      />))}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
