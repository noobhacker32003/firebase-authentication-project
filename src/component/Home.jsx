import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BodySlide from './BodySlide';
import CardsElem from "./CardsElem"
import Discount from './Discount';
import { AuthContext } from './Authprovider';
import Management from './Management';



const Home = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            <BodySlide></BodySlide>
            <Discount></Discount>
            <CardsElem></CardsElem>
            <Management></Management>
            <Footer></Footer>
        </div>
    );
};

export default Home;