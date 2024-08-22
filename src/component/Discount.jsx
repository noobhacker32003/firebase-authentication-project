import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className='h-52 bg-purple-500 mb-8 grid gap-3'>
            <h1 className='text-white font-bold text-3xl text-center pt-11'>Special Discount!!! Upto 30%</h1>
            <p className='text-white text-center text-xl '>Please registration early</p>
            
            <div className="flex
             justify-center">
            <Link to="/register"><button  className='btn text-center'>Register</button></Link>
            </div>
        </div>
    );
};

export default Discount;