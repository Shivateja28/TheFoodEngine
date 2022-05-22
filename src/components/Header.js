import logo from '../Images/Logo.png'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {clearLoginStatus} from '../Slices/userSlice'




function Header(){

    let cartData = useSelector(state=>state.cart)
    let [cartLen, setCartLen] = useState(0)

    
    let {userObj, isError, isLoading, isSuccess, errMsg} = useSelector(state=>state.user)

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
            <div className='container-fluid '>
                <Navbar.Brand><Link to = "/home"><img src={logo} style={{height:'150px'}}/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className='ms-auto'>
                    {isSuccess === true?
                        <>
                            <Nav className = "p-3">
                                <button type = "button" onClick={userLogout}>Logout</button> 
                                <Link className="h3 p-3 nav-link active textcolor" to= "/home">Home</Link>
                                <Link className="h3 p-3 nav-link active textcolor" to= "/aboutus">About Us</Link>                
                                <Link className="h3 p-3 nav-link active textcolor" to= "/cart">Cart ({cartLen})</Link>
                            </Nav>
                        </>:
                        <>
                            <Nav className = "p-3">
                                <Link className="h3 p-3 nav-link active textcolor" to= "/loginpage" >Login</Link>  
                                <Link className="h3 p-3 nav-link active textcolor" to= "/signuppage">Signup</Link>
                                <Link className="h3 p-3 nav-link active textcolor" to= "/aboutus">About Us</Link>                
                                <Link className="h3 p-3 nav-link active textcolor" to= "/cart">Cart </Link>           
                                <Link className="h3 p-3 nav-link active textcolor" to= "/adminlogin">AdminLogin</Link>
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