import React from 'react';

const BodySlide = () => {
    return (
        <div className='mb-6'>
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
            <img  src="https://iili.io/J2aIICF.jpg" className="w-[400px] h-[500px] text-center mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <img src="https://www.brides.com/thmb/V9DprRJ2THzaG7YnsagJMR4psHY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sq-ea8c12ac4c2946738c7d6c3d9c45692f.jpg" className="w-[700px] h-[500px] text-center mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <img src="https://www.brides.com/thmb/go9eXZCftEj2gwKQaIuXfwCUsMs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mira_Rojan_W_01533-eac184a883cc45d0b79e6b0393b50bc1.jpg" className="w-[500px] h-[500px] text-center mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
            <img src="https://www.brides.com/thmb/2-lXUbu4tP6GvCQX2gndj0b1axw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/0Y6A9791-89025fe2675047eaadf84a6423ac7f1d.jpg" className="w-[350px] h-[500px] text-center mx-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>

        </div>
        
    );
};

export default BodySlide;