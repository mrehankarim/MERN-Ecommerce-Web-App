import React, { useState } from "react";

const PostProduct = () => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null); // Change from "" to null

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!productName || !productDescription || !productPrice || !category || !productImage) {
        throw new Error("All fields are required");
      }

      const formData = new FormData();
      formData.append("title", productName);
      formData.append("description", productDescription);
      formData.append("price", productPrice);
      formData.append("category", category);
      formData.append("image", productImage); // Ensure file input is correct

      const response = await fetch("http://localhost:3000/api/v1/post", {
        method: "POST",
        body: formData, 
      });

      const data = await response.json();
      if(response.ok)
      {
        alert("Product posted successfully")
        setCategory("")
        setProductName("")
        setProductDescription("")
        setProductPrice("")
        setProductImage(null)
      }
      
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="border-2 border-gray-300 rounded-md p-2"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Description"
          className="border-2 border-gray-300 rounded-md p-2"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          className="border-2 border-gray-300 rounded-md p-2"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)} className="border-2 border-gray-300 rounded-md p-2">
          <option value="">Select Category</option>
          <option value="chair">Chair</option>
          <option value="table">Table</option>
          <option value="nightstand">Nightstand</option>
          <option value="couch">Couch</option>
          <option value="bed">Bed</option>
          <option value="cupboard">Cupboard</option>
        </select>

        <input
          type="file"
          className="border-2 border-gray-300 rounded-md p-2"
          onChange={(e) => setProductImage(e.target.files[0])} // Fix this
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Post Product
        </button>
      </form>
    </div>
  );
};

export default PostProduct;
