import {Route, Routes, Link} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Cart from './components/Cart'
import Biryani from './components/Food/Biryani'
import Breakfast from './components/Food/Breakfast'
import './App.css';
import Desserts from './components/Food/Desserts'
import Pizza from './components/Food/Pizza'
import Footer from './components/Footer'
import Defaultapp from './defaultapp'
import Header from './components/Header'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import Login from './components/Login'
import MyOrders from './components/MyOrders'
import FAB from './components/FAB'
import Writetous from './components/Writetous'

function App(){

  return(
    <div className='bg homebg'>
      
      <Header/>

      <Routes>
        <Route path = "/" element={<Defaultapp/>}></Route>
        <Route path="/home" element={<Home/>}>

          <Route path='/home/biryani' element={<Biryani/>}/>
          <Route path='/home/breakfast' element={<Breakfast/>}/>
          <Route path='/home/pizza' element={<Pizza/>}/>
          <Route path='/home/desserts' element={<Desserts/>}/>

        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/loginpage" element={<LoginPage/>}></Route>
        <Route path="/signuppage" element={<SignupPage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
        <Route path="/writetous" element={<Writetous/>}></Route>


      </Routes>    
      <FAB/>

      <Footer/>

    </div>
    
  )

}

export default App
