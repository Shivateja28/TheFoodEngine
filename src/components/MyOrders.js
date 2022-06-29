import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'


function MyOrders(){

  let {userObj, isError, isLoading, isSuccess, errMsg} = useSelector(state=>state.user)

  let [orders, setOrders] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4000/orders-api/getorders/${userObj.username}`)
    .then((response)=>{setOrders(response.data.payload)
      console.log("RES",response.data.payload[0])
      console.log("ABKL",response.data.payload[0].data)

    })
    .catch((err)=>console.log(err))
  })

    return(
        <>
          <div className="flex-containe text-white">
            {orders.map((ele, ind)=>
              <div className="p-3">
                <div className = "row text-center">
                  <div className='col-1'>S.NO</div>
                  <div className='col-6'>ITEM NAME</div>
                  <div className='col-2'>QUANTITY</div>
                  <div className='col-3'>COST</div>
                </div>
                <hr style={{border:"2px black"}}/> 
                {ele.data.map((ele, ind)=>    
                <div className = "row text-center">
                      <div className='col-1'>{ind+1}</div>
                      <div className='col-6'>{ele.foodname}</div>
                      <div className='col-2'>{ele.count}</div>
                      <div className='col-3'>{ele.cost}/-</div>
                </div>)
                }
                <div className='row me-4'>
                  <div className='col-6 h5 mt-5'>Destination</div>
                  <div className='col-6 h5 mt-5 text-end'>Total Cost</div>
                </div>
                <div className='row me-4'>
                  <div className='col-6'>{ele.Address}</div>
                  <div className='col-6 text-end'>{ele.cost}/-</div>
                </div>
              </div>)
            }

            
          </div>
        </>
  );
}

export default MyOrders