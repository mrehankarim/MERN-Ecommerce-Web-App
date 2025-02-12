import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
const Chairs = () => {
  const [data, setData] = useState([]);

  // Function to fetch chairs
  const fetchChairs = async (category) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/products?category=${encodeURIComponent(category)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const result = await response.json();

      if (result.statusCode === 200) {
        setData(result.data.products)
        console.log(result.data.products)
      } else {
        throw new Error(result.message || 'Failed to fetch products');
      }

    } catch (error) {
      console.error("Error fetching chairs:", error);
    }
  };



  // Use useEffect to call fetchChairs when the component mounts
  useEffect(() => {
    fetchChairs('chair'); // Fetch data for category "chair"
  }, []); // Empty dependency array means this runs only once after component mounts

  return (
    <Layout>
      <div className="w-[90%] mx-auto my-16">
        <h1 className="text-2xl font-semibold text-center mb-6">Chairs Collection</h1>
        <div className="flex flex-wrap justify-center mx-auto gap-4">
          {data.map((chair, index) => (
            <ProductCard
              key={index} // Unique key for React
              title={chair.product_name}
              ProductImage={chair.product_Image} // Ensure the backend provides `image_url`
              price={chair.product_price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Chairs;
