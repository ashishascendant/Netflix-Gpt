import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';




  const path = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
       path:"/browse",
       element:<Browse/>
    }
  ])
const Body = () => { 
   const dispatch = useDispatch();
  

 useEffect(()=>{
       onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid , email ,displayname }= user;
        dispatch(addUser({uid:uid,email:email, displayname:displayname}))
    } else {
        
    }
});
 },[])

  return (
   <RouterProvider router= {path}/>

  
  )
}

export default Body;
