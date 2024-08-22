import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="ml-7">
                <h1 className='underline font-bold my-4'>About Us:</h1>
                <h1>Welcome to Your Wedding Manager, where dreams come to life and moments turn into memories. With a passion for perfection and an eye for detail, we are dedicated to crafting the wedding of your dreams.</h1>
                <h1 className='text-lg underline font-bold my-4'>Our Story</h1>
                <p>Founded with love and a vision, Your Wedding Manager was born out of a deep desire to create extraordinary moments of celebration. With years of experience in the industry, our team brings a wealth of knowledge and a flair for creativity to every event we undertake.</p>
                <h1 className='text-lg underline font-bold my-4'>Our Mission</h1>
                <p className="">At Your Wedding Manager, we believe that every wedding should be a reflection of the couple's unique love story. We strive to create bespoke events that capture the essence of your relationship and leave a lasting impression on you and your guests.</p>
                <h1 className='text-lg underline font-bold my-4'>Why Choose Us?</h1>
                <p className="">Tailored Experiences: We believe in personalization. Every wedding we plan is uniquely tailored to your tastes, preferences, and vision.</p>
                <p className="">Experienced Professionals: Our team comprises seasoned professionals with a deep understanding of the wedding industry. We bring a wealth of expertise to every event.</p>
                <p className="">Attention to Detail: From the grandest design elements to the tiniest finishing touches, we leave no stone unturned in ensuring that your wedding is flawless.</p>
                <p className="">Stress-Free Planning: Let us handle the logistics and coordination while you focus on savoring the excitement of your special day.</p>
                <p className="mb-5">Vendor Network: We have cultivated strong relationships with a network of trusted vendors, ensuring that you have access to the best in the business.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;