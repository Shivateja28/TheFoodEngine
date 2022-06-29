import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faBus, faCreditCard, faGlobe, faHome, faMobile, faMotorcycle, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import {Toast} from 'react-bootstrap'
import train from '../Images/train.png'
import trainicon from '../Images/trainicon.png'

function Desserts(){

    let [itemdata, setItemData] = useState([])

    let [msg, setMsg] = useReducer((state, action)=>{
        return action
    }, '')

    let {userObj, isError, isLoading, isSuccess, errMsg} = useSelector(state=>state.user)


    useEffect(()=>{
        axios.get("http://localhost:4000/product-api/getproduct/Desserts")
        .then(response => {
            setItemData(response.data.payload)
            console.log(response.data)
        })
        .catch(err=>console.log(err))
    }, [])

        
    let addtoCart = (index)=>{
        delete itemdata[index]._id;
        
        itemdata[index] = {...itemdata[index], username: userObj.username}
        console.log(`itemdata[${index}]: `, itemdata[index])
        axios.post("http://localhost:4000/cart-api/add-product", itemdata[index])
        .then(response=>{
            console.log("RESONPSE>DATA>MESSAGE  :", response.data.message)
            setMsg(String(response.data.message))
            console.log(msg)
            setTimeout(()=>{
                setMsg("")
            }, 8000)
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="row m-5 p-2 justify-content-center"> 
        
        {
            itemdata.map((ele, index) =>
            
                <div className="col-md-4 col-sm-12 p-2" key={index}>
                    <div className="card" >
                    <img src={ele.img} className="card-img-top" alt="..." width='50px'/>
                        <div className="card-body">
                            <p className="card-title text-danger display-5 m-1">{ele.foodname}</p>
                            <p className="text-dark h5 m-2">{ele.restaurant}</p>
                            <p className="h5 pt-4">
                                <FontAwesomeIcon icon={faStar} /> {ele.rating}
                                | <FontAwesomeIcon icon={faMotorcycle}/> Delivery Time <b className="text-primary">{ele.time}min</b> | <FontAwesomeIcon icon={faIndianRupeeSign}/> {ele.cost}/-
                            </p>
                            <div className="p-2">
                                <button type = "button" onClick={()=>{addtoCart(index)}}>Add To Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            
            )
        }

        {msg!=""?
            <div class="containe w-50">
                <img src={train} className = "img1" alt="Cinque Terre" width="300" height="150"/>------
                <img src={trainicon} className = "img2" width="300" height="150"/>
                <div className="message">{msg}</div>
            </div>:<p></p>
        }

        </div>
    )
}

export default Desserts