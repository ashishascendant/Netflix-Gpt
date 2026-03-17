import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
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

  return (
   <RouterProvider router= {path}/>

  
  )
}

export default Body;
