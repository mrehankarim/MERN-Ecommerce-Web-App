import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Couches = () => {
  const [data, setData] = useState([]);

  // Function to fetch couch
  const fetchcouch = async (category) => {
    const uri = `http://127.0.0.1:8000/chairs?category=${encodeURIComponent(category)}`;

    try {
      const response = await axios.get(uri);
      if (response.status === 200) {
        setData(response.data.data);
        console.log(response.data.data);
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      console.log('Response Failed:', error);
    }
  };

  // Use useEffect to call fetchChairs when the component mounts
  useEffect(() => {
    fetchcouch('couch'); // Fetch data for category "chair"
    console.log('useEffect called');
  }, []); // Empty dependency array means this runs only once after component mounts

  return (
    <Layout>
      <div className="w-[90%] mx-auto my-16">
        <h1 className="text-2xl font-semibold text-center mb-6">Couches Collection</h1>
        <div className="flex flex-wrap justify-center mx-auto gap-4">
          {data.map((couch, index) => (
            <ProductCard
              key={index} // Unique key for React
              title={couch.product_name}
              ProductImage={couch.image_url} // Ensure the backend provides `image_url`
              price={couch.price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Couches;
