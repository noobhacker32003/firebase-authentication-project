import { Link, } from "react-router-dom";
import NavBar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from './Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";


const Register = () => {
    
    const {create,signWithGoogle,user} = useContext(AuthContext)

    const handleGoogle=()=>{
        console.log("pressed");
        signWithGoogle()
        .then(result=>{
            setmessage("Succesfully registered")
            notify()
            
            
        })
        .catch(error=>{
            seterror(error.message)
        })
    }
    const notify = () => toast("Registration Succesful",{
        type:"success",
        position: "bottom-center"
    });
    
    const [error,seterror]=useState()
    
    
    const [message,setmessage] =useState()
    const handleSub=e=>{
        seterror("")
        setmessage("")
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if( password.length <6){
            seterror("Password should be 6 character ")
            return;
        }
        else if(!/^(?=.*[A-Z])(?=.*[$%@#*^!_-]).{6,}$/.test(password)){
            console.log("error ");
            seterror("atleast one uppercse and special character")
            return;

        }

        


        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const submit = e.target.check.checked;
        // console.log(email,password,name,photo,submit);
        if(!submit){
            seterror("Please accept term and condition")
            return
        }
        create(email, password)
        .then(result=>{
            result.user.displayName=name
            result.user.photoURL=photo
            setmessage("Succesfully registered")
            notify()
            
            
              
            

        })
        .catch(error=>{
            // console.log(error.message);

            seterror(error.message)
        })
        
        
    }
    return (
        <div className=" ">
            <NavBar></NavBar>
            <div className="bg-accent mx-auto  py-28 rounded-md lg:max-w-5xl  mt-24  ">
                <form onSubmit={handleSub} className=" lg:pr-0 ">
                    <h1 className="lg:text-xl font-semibold ml-16 md:ml-24 mb-2 text-white">Your name</h1>
                    <input className="bg-[#FFF] p-5 ml-16 md:ml-24 lg:mx-24 py-3 rounded-lg w-3/4" type="text" name="name" required placeholder="Enter your name" />


                    <h1 className="lg:text-xl font-semibold ml-16 md:ml-24 mb-2 text-white">Photo URL</h1>
                    <input className="bg-[#FFF] p-5 ml-16 md:ml-24 lg:mx-24 py-3 rounded-lg w-3/4" type="text" required name="photo"  placeholder="Enter your Photo URL" />


                    <h1 className="lg:text-xl font-semibold ml-16 md:ml-24 mb-2 text-white">Email</h1>
                    <input className="bg-[#FFF] p-5 ml-16 md:ml-24 lg:mx-24 py-3 rounded-lg w-3/4" type="email" name="email" required placeholder="Enter your email" />


                    <h1 className="text-xl font-semibold ml-16 md:ml-24 mb-2 text-white">Password </h1>
                    <div className="flex">
                    <input className="bg-[#FFF] p-5 ml-16 md:ml-24 lg:mx-24 py-3 rounded-lg w-3/4" type="text" required name="password"  placeholder="Enter your Password" />
                    </div>
                    <br />
                    <div className="flex gap-3 my-3 text-white">
                        <input className="ml-16 md:ml-24" type="checkbox" name="check" id="" /> <h1>Accept  <Link className="text-blue-500">Term & Conditions</Link></h1>
                    </div>

                    {error &&
                        <h1 className=" ml-16 md:ml-24 mb-3 text-red-600">{error}</h1>

                    
                    }
                    {
                        message &&
                        <h1 className=" ml-16 md:ml-24 mb-3 text-green-600">{message}</h1>
                    }

                    <button className=" ml-16 md:ml-24 btn bg-[#403F3F] text-white w-3/4" name="submit" type="submit">Register</button>
                    <a onClick={handleGoogle} className=" ml-16 md:ml-24 btn bg-[#403F3F] text-white w-3/4" name="google" >Register with <FaGoogle></FaGoogle></a>

                    <h1 className="ml-16 md:ml-24 text-white text-base lg:text-lg"> Already have an account please <Link to="/login" className="text-blue-500"> Login</Link ></h1>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;