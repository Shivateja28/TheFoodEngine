import { useEffect, useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import logo from '../Images/Logo.png'
import { getValue } from '@testing-library/user-event/dist/utils'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import loginimage from '../Images/loginimage.png'



function LoginPage(){

    let [userDetails , setData] = useState([])
    let [loginuserData, setLogin] = useState()
    let [check, setCheck] = useState(0)

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm()

    useEffect(()=>{
        axios.get("http://localhost:4000/login")
        .then(Response=>setData(Response.data))
        .catch(err=>console.log(err))
        
    }, [])
    

    const onFormSubmit = (userData)=>{
        setLogin(userData)
        
        let i = 0;
        for(i=0;i<userDetails.length;i++){
            if((userDetails[i].username == loginuserData.Username) && (userDetails[i].password == loginuserData.Password)){
                setCheck(1)
            }
        }
        if(check == 0){
            setCheck(-1)
        }
        console.log("UserDetails: ", userDetails)
        console.log("LoginDetails", loginuserData)
        console.log("Check:", check)

    }




    return(
        <div>
            <div className='row'>
                <div className="card w-75 mt-5 mb-5 mx-auto">
                    <div className="row loginbg">
                        <div className="col-lg-6 bgcolor">
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5'>
                                <p className='h1 mb-4 '>Login</p>
                                <label htmlFor="un" className= "h3">Username</label>
                                <input type = "text" id = "un" className="form-control" {...register("Username", {required: true})} />
                                {errors.Username?.type === 'required' && <p>*Username Required</p>}

                                <label htmlFor='pwd' className='h3'>Password</label>
                                <input type="password" id = 'pwd' className='form-control' {...register("Password", {required: true, minLength:5})}/>
                                {errors.Password?.type === 'required' && <p>*Password Required</p>}
                                {errors.Password?.type === 'minLength' && <p>*Min Length should be 5</p> }
                                <button type = "Submit" className='bg-dark text-light p-2 m-3 ms-0 w-50'>Submit</button>

                                {check == 1 && 
                                    <div>
                                        <p className='h2'>Login Successfull</p>
                                        <button className='btn bg-success' onClick={()=>navigate('/home')}>Click To Continue</button>
                                    </div>}
                                {check == -1 &&
                                 <div>
                                    <p className='h4'>Login Unsuccessfull</p>
                                    <button className='btn bg-success' onClick ={()=>{navigate('/signuppage')}}>Create New Account</button>
                                 </div>}
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

export default LoginPage

{/*
    
            




*/}