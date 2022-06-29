import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux'
import aboutus from '../Images/Aboutus.png'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Modal, Card, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'


function Cart(){

    const [modalShow, setModalShow] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm()


    let [cartdata, setItems] = useState([])

    let [Ordercond, setCond] = useState(0)
    let [city, setCity] = useState("")
    let [dist, setDistrict] = useState("")


    let {userObj, isError, isLoading, isSuccess, errMsg} = useSelector(state=>state.user)

    console.log(cartdata)

    let objres = ()=>{
      axios.get(`http://localhost:4000/cart-api/getcartproducts/${userObj.username}`)
      .then(response=>{
        setItems(response.data.payload)
        console.log("RESPONSE: ", response.data)
      })
      .catch(err=>console.log(err))
    }

    useEffect(()=>{
      objres();
    }, cartdata)

    const increaseQuantity = (index)=>{


      let obj = cartdata[index]
      axios.post("http://localhost:4000/cart-api/increasequantity", obj)
      .then(response=>{
        console.log(response.data)
        console.log(obj)
        objres();
      })
      .catch(err=>console.log(err))

      
    }

    const CheckOut = ()=>{
      axios.delete(`http://localhost:4000/cart-api/remove-product/${userObj.username}`)
      .then(response=>{
        console.log(response.data)
        objres();
      })
      .cathc(err=>console.log(err))
    }
    
    const decreaseQuantity = (index)=>{

      let obj = cartdata[index]
      console.log(obj)
      axios.post("http://localhost:4000/cart-api/decreasequantity", obj)
      .then(response=>{
        console.log(response.data)
        objres();
      })
      .catch(err=>console.log(err))


      
    }

    const sum = cartdata.reduce(function (result, item) {

      return result + +(item.cost)*(item.count);
    }, 0);
    
    let orderId = Date.now()

    console.log("SUM : ",sum)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let onFormSubmit = (userCredentialsObject)=>{
      let pin = userCredentialsObject.pincode 
      axios.get(`https://api.postalpincode.in/pincode/${pin}`)
      .then((response)=>{
        setCity(response.data[0].PostOffice[0].Name)
        setDistrict(response.data[0].PostOffice[0].District) 
      })
    }

    let postToOrders = ()=>{

      console.log(cartdata)
      let ordersObj = {username: userObj.username, Address : city, data:cartdata, cost:sum}
      axios.post(`http://localhost:4000/orders-api/addorder`, ordersObj)
      .then(response=>{
          console.log(response)
      })
      .catch(err=>console.log(err))
    }
    
    function MyVerticallyCenteredModal(props) {
      
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {userObj.username}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className = "row h5">
              <div className='col-1'>S.NO</div>
              <div className='col-6'>ITEM NAME</div>
              <div className='col-2'>QUANTITY</div>
              <div className='col-3'>COST</div>
            </div>
            <hr style={{border:"3px dotted black"}}/>     
            {cartdata.map((ele, ind)=>
            <div className = "row">
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
              <div className='col-6'>{city}, {dist}</div>
              <div className='col-6 text-end'>{sum}/-</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{postToOrders();CheckOut();setCond(0)}}>CheckOut</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    return(
        <div className='mt-5'>
        {
        cartdata.map((cartelement, index)=>
        
          <div className="card mb-3 w-50 mx-auto"  key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={cartelement.img} className="img-fluid rounded-start cartimg" alt="..."/>
              </div>
              <div className="col-md-8 bgcolor ">
                <div className="card-body text-light">
                  <h5 className="card-title h1">{cartelement.foodname}</h5>
                  <p className="card-text h5">{cartelement.restaurant}</p>
                  <p className="card-text display-2"><FontAwesomeIcon icon={faIndianRupeeSign} className= "display-3"> </FontAwesomeIcon> {cartelement.cost}/-</p>
                  <button className='btn p-2 m-2 bg-secondary' onClick={()=>increaseQuantity(index)}>+</button>
                  {cartelement.count}
                  <button className='btn p-2 m-2 bg-secondary' onClick={()=>decreaseQuantity(index)}>-</button>
                </div>
              </div>
            </div>
          </div>
        )
    
      }
        {sum ==0 && <p className='Noitems textcolor h1 text-center'>No Items</p>}
        {sum !=0 && <><p className='Noitems textcolor h1 text-center'>{sum}</p>

        {Ordercond == 0 &&<div className = "text-center mt-2"><Button onClick={()=>{setCond(1)}} className = "bg-dark text-light ">Order Now</Button></div>}{Ordercond == 1 &&<>

        <Card style={{ width: '18rem' }} className="rounded p-2 mx-auto">
          <Card.Body className = "bgcolor text-light">
            <p className = "h3">Enter Location</p>
            <form onSubmit={handleSubmit(onFormSubmit)} className ='mx-auto'>
              <input type = "text" id = "pincode" className="form-control" {...register("pincode", {required: true})} />
              {errors.pincode?.type === 'required' && <p>*Pincode Required</p>}
            </form>
            <button type = "Submit" className='bg-dark text-light mt-2' onClick={()=>setModalShow(true)}>Submit</button>

          </Card.Body>
        </Card>
          
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </>}</>
    }

      </div>
    )
}

export default Cart