import { Link } from 'react-router-dom'
import carousel2 from '../Images/carousel2.png'

function Login(){
    return(
        <div>
            <img src = {carousel2} width = '100%'></img>
            <div className='row'>
                <div className = "col-md-3 col-sm-12 text-center h3"></div>
                <div className = "col-md-3 col-sm-12 text-center h3">
                    <Link className = "p-3 m-5 nav-link" style={{color:"black"}} to = "/loginpage">User Login</Link>
                </div>
                <div className = "col-md-3 col-sm-12 text-center h3">
                    <Link className = "p-3 m-5 nav-link" style={{color:"black"}} to = "/adminlogin">Admin Login</Link>
                </div>
                <div className = "col-md-3 col-sm-12 text-center h3"></div>
            </div>
        </div>
    )
}

export default Login