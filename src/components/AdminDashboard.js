import axios from 'axios'
import {useForm} from 'react-hook-form'
import loginimage from '../Images/loginimage.png'

function AdminDashboard(){

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = (userCredentialsObject)=>{
        console.log(userCredentialsObject)
        axios.post("http://localhost:4000/product-api/create-product", userCredentialsObject)
        .then((response)=>{
            console.log(response)
        })
        .catch(err=>{
            console.log("Error : ", err)
        })
    }

    return(
            <div className='row'>
                <div className="card w-75 mt-5 mb-5 mx-auto">
                    <div className="row loginbg">
                        <div className="col-lg-6 bgcolor">
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5'>
                                <p className='h1 mb-4 '>AdminLogin</p>
                                <label htmlFor="ft" className= "h3">Food Type</label>
                                <input type = "text" id = "ft" className="form-control" {...register("foodtype", {required: true})} />
                                {errors.foodtype?.type === 'required' && <p>*Food Type Required</p>}

                                <label htmlFor="fn" className= "h3">Food Name</label>
                                <input type = "text" id = "fn" className="form-control" {...register("foodname", {required: true})} />
                                {errors.foodname?.type === 'required' && <p>*Food Name Required</p>}

                                <label htmlFor="res" className= "h3">Restaurant</label>
                                <input type = "text" id = "res" className="form-control" {...register("restaurant", {required: true})} />
                                {errors.restaurant?.type === 'required' && <p>*Restaurant Required</p>}

                                <label htmlFor="ra" className= "h3">Rating</label>
                                <input type = "text" id = "ra" className="form-control" {...register("rating", {required: true})} />
                                {errors.rating?.type === 'required' && <p>*Rating Required</p>}

                                <label htmlFor="time" className= "h3">Time</label>
                                <input type = "text" id = "time" className="form-control" {...register("time", {required: true})} />
                                {errors.time?.type === 'required' && <p>*Time Required</p>}

                                <label htmlFor="cost" className= "h3">Cost</label>
                                <input type = "text" id = "cost" className="form-control" {...register("cost", {required: true})} />
                                {errors.cost?.type === 'required' && <p>*Cost Required</p>}

                                <label htmlFor="img" className= "h3">Img Link</label>
                                <input type = "text" id = "img" className="form-control" {...register("img", {required: true})} />
                                {errors.img?.type === 'required' && <p>*Img Required</p>}



                                <button type = "Submit" className='bg-dark text-light p-2 m-3 ms-0 w-50'>Submit</button>
                            </form>     
                        </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src = {loginimage} className= "w-100 h-100"></img>
                        </div>
                    </div>
                    
                    </div>
            </div>
    )
}

export default AdminDashboard