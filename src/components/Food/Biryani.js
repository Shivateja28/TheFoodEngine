import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faBus, faCreditCard, faGlobe, faHome, faMobile, faMotorcycle, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from "../../Slices/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";

function Biryani(){

    let data = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    let [itemdata, setItemData] = useState()

    useEffect(()=>{
        axios.get("http://localhost:3000/cart")
        .then(response => setItemData(response.data[0]))
        .catch(err=>console.log(err))

        console.log(itemdata)
    }, [])


    let addintocart = (index)=>{
        let actionobj = addCart(itemdata[index])
        dispatch(actionobj)
        console.log(actionobj, data)
    }

    return(
        <div className="row m-5 p-2 justify-content-center"> 
            <div className="col-md-4">
                <div className="card" >
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/von4k7mxgbgv0w58apx6" className="card-img-top" alt="..." width='50px'/>
                    <div className="card-body">
                        <h5 className="card-title text-danger h1 m-1">Mefil Restaurant</h5>
                        <p className="card-text text-dark h5 m-1 mt-3">Nizampet X Road, Kukatpally</p>
                        <p className="h5 pt-4">
                            <FontAwesomeIcon icon={faStar} /> 3.8
                            | <FontAwesomeIcon icon={faMotorcycle}/> Delivery Time <b className="text-primary">39min</b> | <FontAwesomeIcon icon={faIndianRupeeSign}/> 299/-
                        </p>
                        <div className="p-2">
                            <button className="btn btn-primary" onClick={()=>{addintocart(0)}} >Cart</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card" >
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ey73uihvasbgpjmophix" className="card-img-top" alt="..." width='50px'/>
                    <div className="card-body">
                        <h5 className="card-title text-danger h1 m-1">Raghav</h5>
                        <p className="card-text text-dark h5 m-1 mt-3">Nizampet X Road, Kukatpally</p>
                        <p className="h5 pt-4">
                            <FontAwesomeIcon icon={faStar} /> 3.8
                            | <FontAwesomeIcon icon={faMotorcycle}/> Delivery Time <b className="text-primary">39min</b> | <FontAwesomeIcon icon={faIndianRupeeSign}/> 299/-
                        </p>
                        <div className="p-2">
                            <button className="btn btn-primary" onClick={()=>addintocart(1)}>Cart</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card" >
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlw5uiehxkcg0dmpthln" className="card-img-top" alt="..." width='50px'/>
                    <div className="card-body">
                        <h5 className="card-title text-danger h1 m-1">RSSS</h5>
                        <p className="card-text text-dark h5 m-1 mt-3">Nizampet X Road, Kukatpally</p>
                        <p className="h5 pt-4">
                            <FontAwesomeIcon icon={faStar} /> 3.8
                            | <FontAwesomeIcon icon={faMotorcycle}/> Delivery Time <b className="text-primary">39min</b> | <FontAwesomeIcon icon={faIndianRupeeSign}/> 299/-
                        </p>
                        <div className="p-2">
                            <button className="btn btn-primary" onClick={()=>addintocart(2)}>Cart</button>
                        </div>

                    </div>
                </div>
            </div>




            {/*
            <div className="col-md-4">
                <div className="card" >
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlw5uiehxkcg0dmpthln" className="card-img-top" alt="..." width='50px'/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card" >
                    <img src="" className="card-img-top" alt="..." width='50px'/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        */}
        </div>
    
    )
}

export default Biryani