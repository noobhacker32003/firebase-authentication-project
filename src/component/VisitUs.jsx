import React from 'react';
import ReactPlayer from 'react-player/youtube'
import Navbar from './Navbar';
const VisitUs = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='grid  lg:justify-center items-center '>
            
            <h1 className='text-center md:text-3xl font-medium my-8'>Check our video decumentary!!!</h1>
            <div className="">
            <ReactPlayer  width="100%"  url='https://www.youtube.com/watch?v=ZRmRKaEcbVQ' />
            </div>

            
        </div></>
    );
};

export default VisitUs;