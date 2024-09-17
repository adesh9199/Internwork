import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

function ProductCard({ imageSrc, productName, price }) {
  return (
    <div className="product-card p-7 w-1/5  bg-slate-800">
      <img src={imageSrc} alt={productName} className="w-full   rounded-xl" />
      <div className="text-white">{productName}</div>
      <div className="text-white flex items-center">
        <FaRupeeSign className="mr-1" />
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
