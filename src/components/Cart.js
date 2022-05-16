import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux'
import aboutus from '../Images/Aboutus.png'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';

function Cart(){

    let cartdata = useSelector(state=>state.cart)

    console.log(cartdata)

    const sum = cartdata.reduce(function (result, item) {
        return result + item.cost;
      }, 0);

    console.log(sum)

    return(
        <div>
            
                
{/*
<table className='m-2 border border-4 border-dark display-5'>
        <thead className='border border-5 border-success'>
          <tr >
            <th className='border border-5 border-success p-3'>Item</th>
            <th className='border border-5 border-success p-3'>Restaurant</th>
            <th className='border border-5 border-success p-3'>Price</th>
          </tr>
        </thead>
        <tbody  >
        
            cartdata.map((cartelement, index)=><tr className='border border-5 border-success' key={index}><td className='border border-5 border-success p-3 m-2'>{cartelement.foodname}</td><td className='border border-5 border-success p-3'>{cartelement.restaurant}</td><td className='border border-5 border-success p-3'>{cartelement.cost}</td></tr>)
    
        </tbody>
      </table> 
*/}
      {
        cartdata.map((cartelement, index)=>
        
          <div className="card mb-3 w-50 mx-auto"  key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={cartelement.imglink} className="img-fluid rounded-start cartimg" alt="..."/>
              </div>
              <div className="col-md-8 bgcolor ">
                <div className="card-body text-light">
                  <h5 className="card-title h1">{cartelement.foodname}</h5>
                  <p className="card-text h5">{cartelement.restaurant}</p>
                  <p className="card-text display-2"><FontAwesomeIcon icon={faIndianRupeeSign} className= "display-3"> </FontAwesomeIcon> {cartelement.cost}/-</p>
                </div>
              </div>
            </div>
          </div>
        )
    
      }
        {sum ==0 && <p className='Noitems textcolor h1 text-center'>No Items</p>}
        {sum !=0 && <p className='textcolor h1 text-center'>Total Price = {sum}/-</p>}
            
        </div>
    )
}

export default Cart