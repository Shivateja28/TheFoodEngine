import { Link, Outlet } from 'react-router-dom'
import imageone from '../Images/image1.png'
import {Toast} from 'react-bootstrap'
import trainicon from '../Images/trainicon.png'
import train from '../Images/train.png'

function Home(){

    return(
        <div className='backgroundd '>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <p className='Headtag display-1 p-5 m-5 mb-0 pb-0 text-center'>We Serve The Food <span className='textcolor'>UU</span> Love<hr className='bg-primary' style={{height: 3}}/></p>
                    <p className='display-2 p-5 m-5 mt-0 pt-0 text-center'>Don't Cook<br></br>Lets Book</p>
                </div>
                <div className='col-lg-6 col-md-12 text-center'>
                    <img src = {imageone} className = 'w-sm-50 w-md-75 w-75'/>
                </div>
            </div>
            
            <div className='row m-4 p-3 '>
                <div className='col-lg-3 p-3 col-sm-12 col-md-12'>
                    <div className="card card-home">
                        <img src="https://th.bing.com/th/id/OIP.dKWw9Oibmk2GtR6zcbittwHaE8?w=302&h=202&c=7&r=0&o=5&dpr=1.38&pid=1.7" className="card-img"/>
                        <div className="card-img-overlay text-white">
                            <h5 className="card-title h1"><Link className="nav-link active text-light" to= "/home/biryani"><b>BIRYANI</b></Link></h5>
                            <p className="card-text">We’re serious about the spices</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 p-3 col-sm-12 col-md-12'>
                    <div className="card card-home">
                        <img src="https://th.bing.com/th/id/OIP.sOyRx50s6_7h6GfyTcLEewHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.38&pid=1.7" className="card-img"/>
                        <div className="card-img-overlay text-white">
                            <h5 className="card-title h1"><Link className="nav-link active text-light" to= "/home/breakfast"><b>BREAKFAST</b></Link></h5>
                            <p className="card-text">We’re serious about the spices</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 p-3 col-sm-12 col-md-12'>
                    <div className="card card-home">
                        <img src="https://th.bing.com/th/id/OIP.TnR_ekYjoN14jyYNrmaYHgHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7" className="card-img"/>
                        <div className="card-img-overlay text-white">
                            <h5 className="card-title h1"><Link className="nav-link active text-light" to= "/home/pizza"><b>PIZZA</b></Link></h5>
                            <p className="card-text">We’re serious about the spices</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 p-3 col-sm-12 col-md-12'>
                    <div className="card card-home">
                        <img src="https://th.bing.com/th/id/OIP.-oNhDaKKcjBForJffwC2BAHaEw?w=269&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7" className="card-img"/>
                        <div className="card-img-overlay text-white">
                            <h5 className="card-title h1"><Link className="nav-link active text-light" to= "/home/desserts"><b>DESSERTS</b></Link></h5>
                            <p className="card-text">We’re serious about the spices</p>
                        </div>
                    </div>
                </div>
            </div>



            <Outlet/>
        </div>
    )
}

export default Home