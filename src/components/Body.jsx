import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';





  const Body = () => { 
   const dispatch = useDispatch();
  

 useEffect(()=>{
       onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid , email ,displayName }= user;
        dispatch(addUser({uid:uid,email:email, displayname:displayName}))
    } else {
        dispatch(removeUser());
    }
});
 },[])

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
 

  return (
   <RouterProvider router= {path}/>

  
  )
}

export default Body;
