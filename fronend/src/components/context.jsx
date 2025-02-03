import React, { createContext, useEffect, useState } from "react";

// Create CartContext
const CartContext = createContext();

// Create CartProvider
const CartProvider = ({ children }) => {
  
  const [items, setItems] = useState(() => {
    const savedItem = localStorage.getItem("cartItems");
    return savedItem ? JSON.parse(savedItem) : []; // Correctly parse JSON string to an array
  });
  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items)); // Correct way to save an array of objects
  }, [items]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Create CounterContext
const CounterContext = createContext();

// Create CounterProvider
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// Export everything from a single file
export { CartContext, CartProvider, CounterContext, CounterProvider };
