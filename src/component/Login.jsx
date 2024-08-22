
import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from './Authprovider';
import { Link, Navigate, useLocation, useNavigate,  } from 'react-router-dom';
import Navbar from './Navbar';
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogle=()=>{
        
        signWithGoogle()
        .then(result=>{
            setmessage("Succesfully LogIn")
            notify()
            console.log(result.user);
            navigate(location.state && location.state )
        })
        .catch(error=>{
            seterror(error.message)
        })
    }
    const [error,seterror] =useState()
    const [message,setmessage] =useState()
    const warn = () => toast("LogIn failed",{
        type:"error",
        position: "bottom-center"
    });
    const notify = () => toast("LogIn Succesful",{
        type:"success",position: "bottom-center"
    });


    const [eye,seteye]=useState(false)
    const handleEye =()=>{
        seteye(!eye)
    }
    const {signIn,signWithGoogle} =useContext(AuthContext)
    
    
    const handleSub = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(result=>{
            notify()
            console.log(result.user);
            navigate(location.state && location.state )
            
        })
        .catch(error=>{
            seterror(error.message)
            warn()
        })
        
    }
    return (
        <div className="  ">
            <Navbar></Navbar>
            <div className="  bg-accent  py-28 rounded-md lg:max-w-5xl mx-auto mt-24  ">
                <form onSubmit={handleSub} className=' md:pr-0 '>
                   


                    <h1 className="text-xl font-semibold ml-16 mb-2 text-white">Email</h1>
                    <input className="bg-[#FFF] p-5 ml-16 py-3 rounded-lg w-3/4" type="email" name="email"   placeholder="Enter your email" />


                    <h1 className="text-xl font-semibold ml-16 mb-2 text-white ">Password </h1>
                    <div className="flex">
                        <input className="bg-[#FFF] p-5 ml-16 py-3 rounded-lg w-3/4 mb-8" type={eye ? "password" : "text"} name="password" required   placeholder="Enter your Password" />
                            {
                                eye ? <AiFillEye  onClick={handleEye}  className="relative  right-32 top-4 md:top-3 z-40 "></AiFillEye> : <AiFillEyeInvisible  onClick={handleEye} className="relative  right-32  top-4 md:top-3"></AiFillEyeInvisible>
                            }
                    </div>
                        
                    
                    

                    {error &&
                        <h1 className=" ml-16 mb-3 text-red-600">{error}</h1>

                    
                    }
                    {
                        message &&
                        <h1 className=" ml-16 mb-3 text-green-600">{message}</h1>
                    }

                    <button className=" ml-16 btn bg-[#403F3F] text-white w-3/4" name="submit" type="submit">Login</button>
                    <a onClick={handleGoogle} className=" ml-16 btn bg-[#403F3F] text-white w-3/4" name="google" >Login with <FaGoogle></FaGoogle></a>
                    <ToastContainer />
                    <h1 className="ml-16 text-white">  Haven't an account please <Link to="/register" className="text-blue-700"> register</Link ></h1>
                </form>
            </div>
            
        </div>
    );
};

export default Login;