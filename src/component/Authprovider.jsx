import React, { createContext, useEffect, useState } from 'react';
export const AuthContext =createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import JSON from "../data.json"
const auth = getAuth(app)

const Authprovider = ({children}) => {
    
    const [loading,setloading]=useState(true)
    const provider = new GoogleAuthProvider();

    const signWithGoogle =()=>{
        setloading(false)
        
        return signInWithPopup(auth, provider)
    }
    const SignOut =()=>{
        setloading(false)
        return signOut(auth)
    }
    const create=(email,password)=>{
        setloading(false)
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setloading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const [user,setuser]=useState()
    
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        //    console.log('user in the auth state changed', currentUser);
           setuser(currentUser);
           setloading(false)
           
       });
       return () => {
           unSubscribe();
       }
   }, [])



    console.log(user);
    const authVal ={create ,signIn,user,SignOut,signWithGoogle,JSON,loading}

    return (
        <AuthContext.Provider value={authVal}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;