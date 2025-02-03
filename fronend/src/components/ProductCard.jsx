import React, { useContext } from "react";
import { CounterContext,CartContext } from "./context";
const ProductCard = ({ title, price, ProductImage }) => {
  const {count,setCount}=useContext(CounterContext)
  const {items,setItems}=useContext(CartContext)

  const addToCart=()=>
    {
    setCount(count+1)
    setItems([...items,{title,price,ProductImage}])
    console.log(items)
  }

  
  return (
    <div className="relative w-72 rounded-sm border border-amber-800 bg-white overflow-hidden  transition-shadow duration-300 p-2">
      {/* Sale Badge */}
      {true && (
        <span className="absolute top-2 left-2 bg-black text-white text-sm font-semibold px-2 py-1 rounded-full">
          SALE
        </span>
      )}

      {/* Image Section */}
      <div
        className="h-72 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url(${ProductImage})` }}
      >
        {/* Cart Icon Button */}
        <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200" onClick={(e)=>{addToCart()}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800 hover:text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14l-2-8M9 21h6M9 5h6"
            />
          </svg>
        </button>
      </div>

      {/* Text Section */}
      <div className="p-4 text-center">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Price Section */}
        <div className="flex items-center justify-center gap-2 mt-2">

          {/* Discounted Price */}
          <p className="text-amber-600 font-bold">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
