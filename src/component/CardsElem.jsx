import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import Card from './Card';


const CardsElem = () => {
    const {JSON} = useContext(AuthContext)
    // console.log(JSON);
    return (
        <div  className='mx-8 mb-11 grid justify-center  lg:grid-cols-3'>
            
            {
                JSON.map((data,i)=>
                    <Card data={data} key={i}></Card>
                )
            }
        </div>
    );
};

export default CardsElem;