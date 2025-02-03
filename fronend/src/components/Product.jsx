import React from 'react'
const Product = ({title,description,imageUrl}) => {
  return (
    <>
    <div className='flex justify-around py-14'>
        <div className={`w-[40%] h-96 bg-cover bg-center`} style={{backgroundImage:`url(${imageUrl})`}}>

        </div>
        <div className='w-[40%] flex flex-col gap-3'>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p>{description} </p>
            <div className='flex gap-3'>
                <button className='bg-slate-950 text-white py-3 px-6 rounded-md '>Add to cart</button>
                <button className='bg-slate-950 text-white py-3 px-6 rounded-md '>Buy Now</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Product
