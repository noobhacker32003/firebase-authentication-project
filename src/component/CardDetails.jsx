import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import Navbar from './Navbar';

const CardDetails = () => {
    const [cardData,setcardData]=useState({included_services:[]})
    const {JSON}=useContext(AuthContext)
    const {id} = useParams()
    const Int = parseInt(id)
    
    
    useEffect(()=>{
        JSON.map(user=>{
            if(user.id == Int){
                
                setcardData(user)
            }
            
        })
    },[])
    // console.log(cardData);
    const {included_services} =cardData
    console.log(included_services);
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-[800px] lg:h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={cardData.img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-3xl lg:text-5xl font-bold">{cardData.service}</h1>
                <p className="py-6">{cardData.details}</p>
                <h1 className='text-2xl font-bold'>Services</h1>
                {
                    included_services.map(user=>
                        <li>{user}</li>)
                }
                <button className="btn btn-primary mt-4">Hire Us {cardData.price}</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;