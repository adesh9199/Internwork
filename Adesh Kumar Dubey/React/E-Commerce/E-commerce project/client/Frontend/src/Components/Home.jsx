import React, { useState } from 'react';
import Nav from './Nav';
import CustomCarousel from './CustomCarousel';
import SignUp from './SignUp';
import ProductCard from './ProductCard';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const [loginDropdown, setLoginDropdown] = useState(false);
  const { isAuthenticated } = useAuth0();

  const toggleDropdown = () => {
    setLoginDropdown(!loginDropdown);
  };

  return (
    <>
      <div className='bg-slate-800 w-full h-screen mt-0'>
        {/* Navigation bar */}
        {/* Uncomment if Nav component is ready */}
        {/* <Nav onExpand={() => setNavExpanded(true)} onCollapse={() => setNavExpanded(false)} /> */}
        
        {/* Right-side icons */}
        <div className="flex justify-end mr-4  space-x-4 items-center">
          
          
          {/* Login button with dropdown */}
          {/* Uncomment if loginDropdown functionality is needed */}
          {/* <div className="relative">
            <button 
              className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 py-2 px-4 rounded-lg transition-all duration-200" 
              onClick={toggleDropdown}
            >
              Login
            </button>
            {loginDropdown && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg" 
                onMouseLeave={() => setLoginDropdown(false)}
              >
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Admin Login</div>
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">User Login</div>
              </div>
            )}
          </div> */}

          {/* SignUp Component */}
          <SignUp />
        </div>
        
        {/* Conditional rendering based on authentication */}
        {!isAuthenticated && (
          <>
            {/* Carousel */}
            {/* <CustomCarousel /> */}
            
            {/* Product cards */}
            <div className="flex flex-wrap justify-center w-full mt-10 cursor-pointer">
              {[...Array(15)].map((_, index) => (
                <ProductCard 
                  key={index}
                  imageSrc={`https://via.placeholder.com/200x200?text=Product+${index + 1}`}
                  productName={`Product ${index + 1}`}
                  price={` ${(index + 1) * 10}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
