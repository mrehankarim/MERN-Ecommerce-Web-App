import React from 'react'

import chair from "../assets/chair.jpg"
import couch from "../assets/couch.jpg"
import table from '../assets/table.jpg' 
import { useNavigate } from 'react-router-dom'
const Featured = () => {
    const navigate=useNavigate()
  return (
    <>
      <div className='flex md:flex-col md:items-center gap-2 py-2 mx-2'>
        <div className='min-h-screen w-[33%] sm:w-[90%] md:justify-center lg:w-[33%] bg-cover bg-center flex items-end justify-center pb-6' style={{backgroundImage:`url(${chair})`}}>
            <button className='bg-white opacity-70 shadow-md border-none py-3 px-4 text-xl text-black font-semibold' onClick={()=>navigate("chairs")}>Shop Chairs</button>
        </div>
        <div className='min-h-screen w-[33%] sm:w-[90%] md:justify-center lg:w-[33%] bg-cover bg-center flex items-end justify-center pb-6' style={{backgroundImage:`url(${couch})`}}>
        <button className='bg-white opacity-70 shadow-md border-none py-3 px-4 text-xl text-black font-semibold ' onClick={()=>navigate("couches")}>Shop Couches</button>
        </div>
        <div className='min-h-screen w-[33%] sm:w-[90%] md:justify-center lg:w-[33%] bg-cover bg-center flex items-end justify-center pb-6' style={{backgroundImage:`url(${table})`}}>
        <button className='bg-white opacity-70 shadow-md border-none py-3 px-4 text-xl text-black font-semibold' onClick={()=>navigate("tables")}>Shop Tables</button>
        </div>
      </div>
    </>
  )
}

export default Featured
