import Caro from "./Components/Caro";
import NavBar from "./Components/NavBar";
import Foot from "./Components/Foot"
// import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter} from 'react-router-dom'

import Card from "./Components/Card.jsx"


import Women from "./Components/Women.jsx";
import Men from "./Components/Men.jsx";
import Kids from "./Components/Kids.jsx";

import Cart from "./Components/Cart.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import { useSelector } from "react-redux";
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import Orders from "./Components/Orders.jsx";

function App() {
  const userx=useSelector(state=>state.userdata.loginInfo);
  // console.log("userx",userx);
  
  const router=createBrowserRouter([
    {
      path:'/',

      element:<><NavBar/><Caro/><Card/><Foot/></>
    },
    {
      path:'/Women',

      element:<><NavBar/><Women/><Foot/></>
    },
    {
      path:'/Men',

      element:<><NavBar/><Men/><Foot/></>
    },
    {
      path:'/Kids',

      element:<><NavBar/><Kids/><Foot/></>
    },
    {
      path:'/Cart',

      element:<><NavBar/><Cart/><Foot/></>
    },
    
    {
      path:'/login',

      element:userx[0]&&userx[0].data.accesstoken?<><NavBar/><Profile/><Foot/></>:<><NavBar/><Login/><Foot/></>
    },
    {
      path:'signup',
      element:<><NavBar/><Signup/><Foot/></>
    },
    {
      path:'/orders',
      element:<><NavBar/><Orders/><Foot/></>
    }
  ])
  return (
   <RouterProvider router={router}>

   </RouterProvider>
  );
}

export default App;
