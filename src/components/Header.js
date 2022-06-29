import logo from '../Images/Logo.png'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {Nav, Navbar, Container, Dropdown, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {clearLoginStatus} from '../Slices/userSlice'
import { faFacebook, faFacebookF,  faFacebookMessenger, faInstagram, faInstagramSquare, faOpencart, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import axios from 'axios'
import { faCircleInfo, faHouse } from '@fortawesome/free-solid-svg-icons'
import {FaOpencart } from 'react-icons/fa'
import { BiHomeHeart, BiLogOut } from 'react-icons/bi'
import {IoLogIn} from 'react-icons/io5'
import {FiUserPlus} from 'react-icons/fi'



function Header(){

    let cartData = useSelector(state=>state.cart)
    let [cartLen, setCartLen] = useState(0)

    
    let {userObj, isError, isLoading, isSuccess, errMsg} = useSelector(state=>state.user)
/*
    useEffect(()=>{
        axios.get(`http://localhost:4000/cart-api/getcartcount/${userObj.username}`)
        .then(response=>{
          setCartLen(response.data.len)
          console.log("LEGNTH:",response.data.len)
        })
        .catch(err=>console.log(err))
    })*/


    let navigate = useNavigate();
    let dispatch = useDispatch();

    let userLogout = ()=>{
        localStorage.clear();
        dispatch(clearLoginStatus());
        navigate("/loginpage")
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">          
            <div className='container-fluid navbar'>
                <Navbar.Brand><Link to = "/home"><img src={logo} style={{height:'90px'}}/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className='ms-auto'>
                    {isSuccess === true?
                        <>
                            <Nav className = "me-5">
                                <Dropdown>
                                    <Dropdown.Toggle id = "dropdown-basic" className = "mt-1 me-5 bg-light text-dark m-3 mt-3 ">
                                        {userObj.username}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1"><Link className="h4 p-2 nav-link active textcolor" to= "/home">Home<BiHomeHeart/></Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"><Link className="h4 p-2 nav-link active textcolor" to= "/aboutus">About Us <FontAwesomeIcon icon={faCircleInfo} /></Link> </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><Link className="h4 p-2 nav-link active textcolor" to= "/cart">Cart  <FaOpencart/></Link></Dropdown.Item>                                        
                                        <Dropdown.Item href="#/action-4"><Link className="h4 p-2 nav-link active textcolor" to= "/myorders">MyOrders  <FaOpencart/></Link></Dropdown.Item>
                                        <Dropdown.Item ><button type = "button" className='ms-1 bg-light border-0 h4 ' onClick={userLogout}>Logout <BiLogOut/></button></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                            </Nav>
                        </>:
                        <>
                            <Nav className = "p-3">
                                <Link className="h4 p-3 nav-link active textcolor" to= "/login" >Login<IoLogIn/></Link>  
                                <Link className="h4 p-3 nav-link active textcolor" to= "/signuppage">Signup  <FiUserPlus/></Link>
                                <Link className="h4 p-3 nav-link active textcolor" to= "/aboutus">About Us  <FontAwesomeIcon icon={faCircleInfo} /></Link>     
                            </Nav>
                        </>
                    }
                        
                </div>
                </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    )
}

export default Header