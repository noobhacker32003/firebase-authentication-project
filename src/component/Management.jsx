import React from 'react';

const Management = () => {
    return (
        <div className='bg-purple-500 mb-10'>
            <h1 className='text-center text-2xl font-medium text-white bg-purple-500 py-3'>Customer Review</h1>
            <div className="grid  lg:grid-cols-3 justify-center">
                <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure className="px-10 pt-10">
                    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Michel</h2>
                    <p>It's a great Experience by your service</p>
                    <div className="rating">
                    
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure className="px-10 pt-10">
                    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/09/09/halle-berry.jpg?quality=75&width=640&auto=webp" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Gorgie</h2>
                    <p>I feel happy to their service</p>
                    <div className="rating">
                    <p></p>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure className="px-10 pt-10">
                    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/23/13/daniel-craig.jpg?quality=75&width=640&auto=webp" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Smith</h2>
                    <p>They are quite organaized for this work</p>
                    <div className="rating">
                    <p></p>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Management;