import axios from 'axios'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import logo from '../Images/Logo.png'
import { Link, useNavigate } from 'react-router-dom'

function SignupPage(){

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [logindata, setlogin] = useState()
    let [check, setCheck] = useState(-1)

    const navigate = useNavigate()

    const onFormSubmit=(userData)=>{

        axios.get("http://localhost:4000/login")
        .then(response=>setlogin(response.data))
        .catch(err=>console.log(err))
        let i=0;
        for(i = 0;i<logindata.length;i++){
            console.log("logindata[",i,"].username", logindata[i].username, "userData.username",userData.username)
            console.log("logindata[",i,"].password", logindata[i].password, "userData.password",userData.password)
            if((logindata[i].username == userData.username) && (logindata[i].password == userData.password)){
                setCheck(0)
                check = 0
                console.log("Inside for", check)
                break
            }
        }
        console.log("Check:", check)
        if(check != 0){
            setCheck(1)
            check = 1
        }
        if(check == 1){
            axios.post("http://localhost:4000/login", userData)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
            console.log("Inside axios", check)
        }

    


    }

    return(
        <div>
            <div className='row'>
                <div className="card w-75 mx-auto">
                    
                    <div className="row g-0">
                        
                        <div className="col-md-7">
                        <img src="https://th.bing.com/th/id/OIP.SVQuKv9AV3rBM5ZnfCmtigHaE8?w=299&h=200&c=7&r=0&o=5&dpr=1.38&pid=1.7" alt="..." width= '1200'/>
                        </div>
                        <div className="col-md-5 bgcolor">
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5'>
                            <p className='h1 text-light'>Sign Up</p>

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
                                <button type = "Submit" className='bg-dark text-light p-2 m-3 ms-0 w-50'>Submit</button>
                                {check==1 && <p className='h2 text-light'>Sign Up successfull Redirecting to Login page
                                {setTimeout(() => {
                                    navigate('/loginpage')
                                }, 5000)}</p>}
                                {check==0 && <div><p className='h5 text-light'>Username already exists</p><Link className="nav-link active text-light bg-dark text-center w-50" to= "/loginpage">Login</Link></div>}
                            </form>
                        </div>
                        
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )

}

export default SignupPage

{/*
    
            




*/}