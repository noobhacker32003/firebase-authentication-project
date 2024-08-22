import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidUserRectangle } from 'react-icons/bi';
const Navbar = () => {
    

    const notify = () => toast("LogOut Succesful",{
        type:"success"
    });
    

    
    const {user,SignOut}=useContext
    (AuthContext)
    

    const handleSignOut=()=>{
        SignOut()
        .then(result=>{
            notify()

        })
        .catch(error=>{

        })
    }
    

    
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {
                    user ?
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                
                    <div className="flex gap-4">
                        <Link to="/"><button className='hover:text-blue-600 font-normal text-xs '>Home</button></Link>
                        <Link to="/aboutUs"><button className='hover:text-blue-600 font-normal text-xs'>About us</button></Link>
                        
                        { user && <>
                        <Link to="/contact"><button className='hover:text-blue-600 font-normal text-xs'>Contact us</button></Link>
                        <Link to="/visit"><button className='hover:text-blue-600 font-normal text-xs'>View us</button></Link>
                        </>}
                        
                        
                    </div>
    
                    
                    
                        
                    </ul>
                    :
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                
                    <div className="flex gap-4">
                        <Link to="/"><button className='hover:text-blue-600 font-normal text-xs '>Home</button></Link>
                        <Link to="/aboutUs"><button className='hover:text-blue-600 font-normal text-xs'>About us</button></Link>
                        
                        { user && <>
                        <Link to="/contact"><button className='hover:text-blue-600 font-normal text-xs'>Contact us</button></Link>
                        <Link to="/visit"><button className='hover:text-blue-600 font-normal text-xs'>View us</button></Link>
                        </>}
                        
                        
                    </div>
    
                    
                    
                        
                    </ul>
                }
                </div>
                <div  data-aos="flip-left">
                    
                    <img className='rounded-t-xl rounded-b-xl h-11 md:ml-24' src="https://iili.io/J2QJQun.jpg" alt="" />
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                <div className="flex gap-4">
                    <Link to="/"><button className='btn' >Home</button></Link>
                    <Link to="/aboutUs"><button className='btn' >About us</button></Link>
                    
                    {user && <>
                    <Link to="/contact"><button className='btn' >Contact us</button></Link>
                    <Link to="/visit"><button className='btn' >View us</button></Link>
                    </>}
                </div>
                

                </ul>
            </div>
            <div className="navbar-end">
                {user? <div className="flex flex-row-reverse  items-center">
                <Link to="/login"><button className='btn' onClick={handleSignOut}>Logout</button ></Link>
                <h1 className='text-base font-medium px-4'>{user.displayName}</h1>
                <img className='rounded-full h-12' src={user.photoURL}  />
                </div> :
                <Link to="/login"><button  className='btn'>Login</button ></Link>}
            </div>
            <ToastContainer />
            </div>
            
        </div>
    );
};

export default Navbar;