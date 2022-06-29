import { useEffect, useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import logo from '../Images/Logo.png'
import { getValue } from '@testing-library/user-event/dist/utils'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import loginimage from '../Images/loginimage.png'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {userLogin} from '../Slices/userSlice'



function LoginPage(){



    const {register, handleSubmit, formState: {errors}} = useForm()

    let {userObj, isError, isLoading, isSuccess, errMsg} = useSelector(state=>state.user)
    let dispatch = useDispatch()

    const navigate = useNavigate()

    const onFormSubmit = (userCredentialsObject)=>{


        dispatch(userLogin(userCredentialsObject))
        if(isSuccess==true){navigate('/home')}
    
        
    }




    return(
        <div>
            <div className='row'>
            <div className="bgcolor mx-auto m-5 w-xl-50 border rounded" style = {{width : "1000px"}}>
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5 '>
                                <p className='h1 text-center'>Login</p>
                                <label htmlFor="un" className= "h3">Username</label>
                                <input type = "text" id = "un" className="form-control" {...register("username", {required: true})} />
                                {errors.username?.type === 'required' && <p>*Username Required</p>}

                                <label htmlFor="pa" className= "h3">Password</label>
                                <input type = "password" id = "pa" className="form-control" {...register("password", {required: true})} />
                                {errors.password?.type === 'required' && <p>*Password Required</p>}
                                <div className='text-center mt-2'>
                                    <button type = "Submit" className='bg-dark text-light p-2 m-3 ms-0 w-50 '>Submit</button>
                                </div>
                            </form>     
                        </div>{/* 
                        <div className='col-md-6'>
                            <img src = {loginimage} className= "w-md-100 w-50"></img>
                        </div> */}

                    
                    </div>
            </div>
            <Outlet/>
        </div>
    )

}

export default LoginPage

{/*
    
            




*/}