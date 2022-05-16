import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faBus, faCreditCard, faGlobe, faHome, faMobile, faMotorcycle, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from "../../Slices/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";

function Idly(){

    let data = useSelector(state=>state.Food)
    const dispatch = useDispatch()
    let [itemdata, setItemData] = useState([])
    let [img, setimg] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:4000/Food")
        .then(response => setItemData(response.data[0]))
        .catch(err=>console.log(err))

        console.log(itemdata)

        itemdata.map((ele, index) =>console.log(ele.imglink))
    }, [])

    let addintocart = (index)=>{
        let actionobj = addCart(itemdata[index])
        dispatch(actionobj)
        console.log(actionobj, data)
    }

    return(
        <div className="row m-5 p-2 justify-content-center"> 
        
        {
            itemdata.map((ele, index) =>
            
                <div className="col-md-4" key={index}>
                    <div className="card" >
                        <img src={ele.imglink} className="card-img-top" alt="..." width='50px'/>
                        <div className="card-body">
                            <h5 className="card-title text-danger h1 m-1">{ele.restaurant}</h5>
                            <p className="h5 pt-4">
                                <FontAwesomeIcon icon={faStar} /> {ele.rating}
                                | <FontAwesomeIcon icon={faMotorcycle}/> Delivery Time <b className="text-primary">{ele.time}min</b> | <FontAwesomeIcon icon={faIndianRupeeSign}/> {ele.cost}/-
                            </p>
                            <div className="p-2">
                                <button className="btn btn-primary" onClick={()=>addintocart(index)}>Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            
            )
        }

        </div>
    )
}

export default Idly