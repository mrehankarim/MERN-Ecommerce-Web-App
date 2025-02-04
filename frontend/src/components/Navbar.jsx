import React, {  useContext, useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

import {CounterContext} from './context'
const Navbar = () => {
    const[nav,setNav]=useState(false)
    const {count,setCount}=useContext(CounterContext)
    useEffect(()=>{
      if(nav)
      {
        document.body.style.overflow='hidden'
      }
      else
      {
        document.body.style.overflow='auto'
      }
      console.log(count)
    },[nav])
    
  return (
    <>
      <div className='w-full relative bg-black flex justify-between items-center px-4 h-20'>
        <div>
        <button onClick={()=>{setNav(!nav)}}><GiHamburgerMenu size="34px" color='white'/></button>
        </div>
        <div>
           <NavLink to='/'> <p className='font-bold text-3xl text-amber-800'>HAVEN</p></NavLink>
        </div>

        <div className='relative'>
        <NavLink to="/cart"><IoBagHandleOutline size="34px" color='white' />
        <div className="bg-white flex justify-center items-center rounded-full w-4 h-4 absolute top-5 left-4 ">
           <p className="text-slate-950 text-xs">{count}</p>
</div>
</NavLink>
        </div>
      </div>
      {
        nav &&(
          <>
          <div className='w-full h-[100vh] bg-white absolute top-0 z-[5] opacity-50'>
           </div>
          

            <nav className='h-[100vh] w-[40vw] md:w-[70vw] sm:[w-100vw] absolute z-[6] top-0 bg-white flex flex-col gap-4 border-2 border-black ease-linear delay-300 animate-slideIn'>
            <button className='absolute z-[7] top-5 left-[90%]' onClick={(e)=>setNav(false)}>
            <IoMdClose size="40px" color='black'/>
            </button>
              <div className='flex justify-center border-2 border-r-0 border-slate-800'>
          
                <p className='font-bold text-5xl leading-[70px] text-amber-800 '>HAVEN</p>
              </div>
                <ul className='w-full bg-white  flex flex-col gap-3 ps-6'>
                  <li className='text-xl  text-gray-900 leading-[34px] hover:underline '><NavLink to="/chairs">Chairs</NavLink></li>
                  <li className='text-xl  text-gray-900 leading-[34px] hover:underline'><NavLink to="/tables">Tables</NavLink></li>
                  <li className='text-xl  text-gray-900 leading-[34px] hover:underline '><NavLink to="/couches">Couches</NavLink></li>
                  <li className='text-xl  text-gray-900 leading-[34px] hover:underline'><NavLink to="/bed">Bed</NavLink></li>
                  <li className='text-xl  text-gray-900 leading-[34px] hover:underline'><NavLink to="/cupboards">Cupboard</NavLink></li>
                  <li className='text-xl  text-gray-900 leading-[34px] hover:underline'><NavLink to="/nightstands">Nightstands</NavLink></li>
                </ul>
            </nav>
            
            </>
        )
      }
    </>
  )
}

export default Navbar
