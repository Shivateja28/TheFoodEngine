import {Route, Routes, Link} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Cart from './components/Cart'
import Biryani from './components/Food/Biryani'
import Breakfast from './components/Food/Breakfast'
import logo from './Images/Logo.png'
import './App.css';
import Desserts from './components/Food/Desserts'
import Pizza from './components/Food/Pizza'
import Footer from './Footer'
import Defaultapp from './defaultapp'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


function App(){

  let cartData = useSelector(state=>state.cart)
  let [cartLen, setCartLen] = useState(0)

  useEffect(()=>{
    setCartLen(cartData.length)
  })

  return(
    <div className='bg homebg'>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to = "/home"><img src={logo} style={{height:'150px'}}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
              
              <ul className='navbar-nav h3 p-2 '>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/loginpage" >Login</Link>
                </li>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/signuppage">Signup</Link>
                </li>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/aboutus">About Us</Link>
                </li>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/cart">Cart ({cartLen})</Link>
                </li>
              </ul>


            </div>
          </div>
        </nav>
      </div>
     {/*
      <div className='row text-center'>
        <div className='col-2 p-2'><img src={logo} style={{height:'150px'}}/></div>
        <div className='col-2 h2 mt-5'><Link className="nav-link active" to= "/home">Home</Link></div>
        <div className='col-2 h2 mt-5'><Link className="nav-link active" to= "/loginpage">Login</Link></div>
        <div className='col-2 h2 mt-5'><Link className="nav-link active" to= "/signuppage">Signup</Link></div>
        <div className='col-2 h2 mt-5'><Link className="nav-link active" to= "/aboutus">About Us</Link></div>
      </div>
      */}
      
      <Routes>
        <Route path = "/" element={<Defaultapp/>}></Route>
        <Route path="/home" element={<Home/>}>

          <Route path='/home/biryani' element={<Biryani/>}/>
          <Route path='/home/breakfast' element={<Breakfast/>}/>
          <Route path='/home/pizza' element={<Pizza/>}/>
          <Route path='/home/desserts' element={<Desserts/>}/>

        </Route>
        <Route path="/loginpage" element={<LoginPage/>}></Route>
        <Route path="/signuppage" element={<SignupPage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
      <Footer/>
    </div>
    
  )

}

export default App
