import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel() {
  return (
    <div className="carousel-container mb-5 bg-slate-800 h-10">
      <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000} // Auto-scroll interval in milliseconds
        className="carousel"
      >
        {/* Add your carousel items here */}
        <div className='h-10mb-5 bg-slate-800'>
          <img src="https://via.placeholder.com/800x400.png?text=Image+1 " alt="Product 1" />
        </div>
        <div className='h-10mb-5 bg-slate-800'>
          <img src="https://via.placeholder.com/800x400.png?text=Image+2" alt="Product 2" />
        </div>
        <div className='h-10mb-5 bg-slate-800'>
          <img src="https://via.placeholder.com/800x400.png?text=Image+3" alt="Product 3" />
        </div>
        <div className='h-10mb-5 bg-slate-800'>
          <img src="https://via.placeholder.com/800x400.png?text=Image+4" alt="Product 4" />
        </div>
        <div className='h-10mb-5 bg-slate-800'>
          <img src="https://via.placeholder.com/800x400.png?text=Image+5" alt="Product 5" />
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
