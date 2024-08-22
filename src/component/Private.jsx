import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from "react-router-dom";
const Private = ({children}) => {
    const location = useLocation()
    console.log(location.pathname);
    const {user,loading}= useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center items-center mt-60">
            <span className="loading loading-spinner loading-lg "></span>
        </div>
    }
    if(user){
        return children
     }
     return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;