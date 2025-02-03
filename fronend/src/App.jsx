import React from 'react'
import Contact from "../src/Pages/Contact"
import PrivacyPolicy from '../src/Pages/PrivacyPolicy'
import Terms from '../src/Pages/Terms'
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chairs from './Pages/Chairs';
import Tables from './Pages/Tables';
import Couches from './Pages/Couches';
import NightStands from './Pages/NightStands';
import Bed from './Pages/Bed';
import Cupboard from './Pages/Cupboard';
import Cart from './Pages/Cart';
import { CartProvider,CounterProvider } from './components/context';

const App = () => {
  
  const routes=createBrowserRouter([
    {
      path:"/contact",
      element:<Contact/>

    },
    {
      path:"/terms",
      element:<Terms/>
    },
    {
      path:"/privacy",
      element:<PrivacyPolicy/>
    },
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/chairs",
      element:<Chairs/>
    },
    {
      path:"/tables",
      element:<Tables/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/couches",
      element:<Couches/>
    },
    {
      path:"/nightstands",
      element:<NightStands/>
    },
    {
      path:"/bed",
      element:<Bed/>
    },
    {
      path:"/cupboards",
      element:<Cupboard/>
    }

  ])
  return (
    <>
    <CounterProvider>
    <CartProvider>
      <RouterProvider router={routes}/>
      </CartProvider>
      </CounterProvider>
    </>
  )
}

export default App
