import axios from 'axios'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import logo from '../Images/Logo.png'
import { Link, useNavigate } from 'react-router-dom'

function SignupPage(){

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [logindata, setlogin] = useState()
    let [check, setCheck] = useState(-1)

    let [img, setImg]  = useState(null);

    const onImageSelect = (event)=>{
        setImg(event.target.files[0]);
    }


    const navigate = useNavigate()

    const onFormSubmit=(userObj)=>{

        //http post req
        axios.post('http://localhost:4000/user-api/create-user', userObj)
        .then(response=>{
            if(response.data.message == "New User created"){
                console.log(response.data.message)
                setCheck(1)
            }
            else if(response.data.message == "Username has already taken..Plz choose another"){
                console.log(response.data.message)
                setCheck(0)
            }
            console.log(userObj)
            console.log(response.data.message)
        })
        .catch(error=>alert("Something went wrong in creating user"))

    }

    let navigatetologin = ()=>{
        navigate('/loginpage')
    }

    
    return(
        <div>
            <div className='row'>
                    
{/*                         
                        <div className="col-3">
                        <img src="https://th.bing.com/th/id/OIP.SVQuKv9AV3rBM5ZnfCmtigHaE8?w=299&h=200&c=7&r=0&o=5&dpr=1.38&pid=1.7" alt="..." width= '1200'/>
                        </div> */}
                        <div className="bgcolor mx-auto m-5 w-md-50 border rounded" style = {{width : "1000px"}}>
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5 '>
                            <p className='h1 text-light text-center'>Sign Up</p>

                                <label htmlFor="username" className= "h3 mt-4">UserName</label>
                                <input type = "text" id = "username" className="form-control" {...register("username", {required: true})} />
                                {errors.username?.type === 'required' && <p>*UserName Required</p>}

                                <label htmlFor="mobileno" className= "h3">Mobile Number</label>
                                <input type = "text" id = "mobileno" className="form-control" {...register("mobileno", {required: true})} />
                                {errors.mobileno?.type === 'required' && <p>*Mobile Number Required</p>}

                                <label htmlFor="email" className= "h3">Email</label>
                                <input type = "email" id = "email" className="form-control" {...register("email", {required: true})} />
                                {errors.email?.type === 'required' && <p>*Email Required</p>}


                                <label htmlFor='pwd' className='h3'>Password</label>
                                <input type="password" id = 'pwd' className='form-control' {...register("password", {required: true, minLength:5})}/>
                                {errors.password?.type === 'required' && <p>*Password Required</p>}
                                {errors.password?.type === 'minLength' && <p>*Min Length should be 5</p> }


                                <div className='text-center'>
                                    <button type = "Submit" className='bg-dark text-light p-2 mt-5 ms-0 w-50'>Submit</button>
                                </div>
                                {check==1 && <p className='h2 text-light'>Sign Up successfull Redirecting to Login page
                                {setTimeout(() => {
                                    navigate('/loginpage') 
                                }, 5000)}</p>}
                                {check==0 && 
                                    <>
                                        <p>UserName Already exists Try Login or Create new User</p>
                                        <button type = "button" onClick={navigatetologin}>Login</button>
                                    </>
                                }
                            </form>
                        </div>
                        
                    </div>
            </div>
        </div>
    )

}

export default SignupPage

{/*
    
            




*/}