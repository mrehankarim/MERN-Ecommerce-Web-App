import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './context'

const CartCard = () => {

    const { items, setItems } = useContext(CartContext)
    let total = 0
    useEffect(() => {
        console.log(items)
    })
    return (
        <>
        <div className='flex md:flex-col justify-around  py-7'>
            <div className='w-[50%] md:w-[80%] md:mx-auto'>
            {
                items.map((item) => {
                    total += Number(item.price)
                    
                    return (
                        
                        
                            <div className='flex justify-around items-center border-[1.5px] border-amber-800 my-2 py-3 rounded-md'>
                                <div>
                                    <h1 className='text-lg'>{item.title}</h1>
                                    <p>{`$${item.price}`}</p>
                                </div>
                                <div className="w-[100px] h-[100px] flex items-center justify-center">
                                    <img src={item.ProductImage} alt="" className="max-w-full max-h-full object-contain rounded-sm" />
                                </div>

                            </div>
                    )
                })
            }
            </div>
            <div className='w-[30%] md:w-[80%] md:mx-auto h-full border border-amber-800 mt-11 p-3 rounded-md'>
                {
                    items.map((item)=>{
                        return(
                            <>
                            <div className='flex justify-between'>
                            <h1 className='text-sm '>{item.title}</h1>
                            <p className='text-sm font-semibold'>{`$${item.price}`}</p>
                            </div>
                            </>
                        )
                    })
                }
                <div className='flex justify-between mt-4'>
                            <h1 className='text-xl font-bold'>Total</h1>
                            <p className='text-xl font-bold'>${total}</p>
                            </div>
                    
                <button className='bg-slate-950 text-white py-2 mt-4 w-full rounded-md '>Checkout</button>
            </div>
            </div>

        </>
    )
}

export default CartCard
