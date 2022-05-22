import {useForm} from 'react-hook-form'
import { Outlet, useNavigate } from 'react-router-dom'
import loginimage from '../Images/loginimage.png'



function AdminLogin(){



    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    const onFormSubmit = (userCredentialsObject)=>{

        if(userCredentialsObject.username == "TheFoodEngine"){
            if(userCredentialsObject.password == "Foodengine"){

                navigate('/admindashboard')
                alert("Navigating to admin dashboard!!")
                
            }
            else{
                alert("Invalid Password")
            }
        }
        else{
            alert("Invalid Username")
        }
    }




    return(
        <div>
            <div className='row'>
                <div className="card w-75 mt-5 mb-5 mx-auto">
                    <div className="row loginbg">
                        <div className="col-lg-6 bgcolor">
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5'>
                                <p className='h1 mb-4 '>AdminLogin</p>
                                <label htmlFor="un" className= "h3">Username</label>
                                <input type = "text" id = "un" className="form-control" {...register("username", {required: true})} />
                                {errors.username?.type === 'required' && <p>*Username Required</p>}

                                <label htmlFor="pa" className= "h3">Password</label>
                                <input type = "password" id = "pa" className="form-control" {...register("password", {required: true})} />
                                {errors.password?.type === 'required' && <p>*Password Required</p>}
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
            <Outlet/>
        </div>
    )

}

export default AdminLogin

{/*
    
            




*/}