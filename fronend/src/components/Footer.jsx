import React, { useState } from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter, FaSnapchat } from "react-icons/fa6";

import { AiOutlinePinterest } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("")
    return (
        <>
            <div className='min-h-[70vh] bg-black flex md:flex-col md:justify-evenly md:gap-4  justify-around gap-0 items-center px-4 py-6'>
                <div className='flex justify-between gap-6 sm:flex-col'>

                <div className=''>

                    <ul className='flex flex-col gap-3'>

                        <li className=' text-5xl text-amber-800 font-bold tracking-wide'>HAVEN</li>
                        <div>
                            <li className='font-semibold text-white'>Customer Support</li>
                            <li className='text-white'>Monday to Saturday 9:00 AM to 2:00 AM
                            </li>
                            <li className='text-white'>Sunday 12:00 PM to 12:00 AM</li>
                        </div>
                        <div>
                            <li className='text-white font-semibold'>Contact Information</li>
                            <li className='text-white hover:underline'>Landline: 042-32301484
                            </li>
                            <li className='text-white hover:underline'>Email: info@haven.com.pk</li>
                        </div>
                    </ul>

                </div>


                <div className='flex flex-col gap-3
'>
                    <h4 className='text-white text-2xl font-bold'>Information</h4>
                    <ul>
                        <li className='text-white hover:underline'>Blogs</li>
                        <li className='text-white hover:underline'><Link to="/terms">Terms & Conditions</Link></li>
                        <li className='text-white hover:underline'>Store Locator</li>
                    </ul>


                </div>
                </div>
                <div className='flex justify-between gap-6 sm:flex-col'>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-white text-2xl font-bold'>Customer Care</h4>
                    <ul>
                        <li className='text-white hover:underline'><Link to="/contact">Contact Us</Link></li>
                        <li className='text-white hover:underline'>FAQ's</li>
                        <li className='text-white hover:underline'>Feedback/Complaint</li>
                        <li className='text-white hover:underline'>Track your order</li>
                        <li className='text-white hover:underline'><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>


                </div>

                <div className='flex flex-col gap-3'>
                    <h4 className='text-white text-2xl font-bold'>Sign up and save
                    </h4>

                    <input type="email" id="footerEMail" onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='px-4 py-3 bg-slate-950 text-white border border-white' />
                    <ul className='flex gap-2'>
                        <li><FaFacebook color='white' size="24px" className='hover:animate-bounce delay-300' />
                        </li>
                        <li><FaInstagram color='white' size="24px" className='hover:animate-bounce delay-300' />
                        </li>
                        <li><FaSquareXTwitter color='white' size="24px" className='hover:animate-bounce delay-300' />
                        </li>
                        <li><AiOutlinePinterest color='white' size="24px" className='hover:animate-bounce delay-300' />
                        </li>
                        <li><FaYoutube color='white' size="24px" className='hover:animate-bounce delay-300' />
                        </li>
                        <li><FaSnapchat color='white' size="24px" className='hover:animate-bounce delay-300' />
                        </li>
                    </ul>
                </div>
                </div>

            </div>
            <hr className='border-slate-700' />
            <div className='w-full bg-black'>
                <p className='h-[25vh] text-white flex justify-center items-center  text-center'>© 2025, <a href="" className='hover:underline'>Haven Furniture</a> - Powered by mrehankarim</p>
            </div>
        </>
    )
}

export default Footer
