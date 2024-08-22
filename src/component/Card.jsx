import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data,i}) => {
    return (
        <div className='mb-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={data.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.service}</h2>
                <p>{data.details.slice(0,120)}<span className=''>....</span> </p>
                <p >Price: <span className='text-purple-600 font-bold'>{data.price}</span></p>
                <div className="card-actions justify-end">
                <Link to={`/carddetails/${data.id}`}><button className="btn btn-primary mx-auto text-white ">view details </button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;