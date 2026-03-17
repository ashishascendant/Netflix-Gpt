import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[signin,setsignin]= useState(true);
  const togglesignin= ()=>{
      setsignin(!signin);
  }
  return (
   <div className="relative min-h-screen">

  {/* Background Image */}
  <img
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    src="https://images.wallpapersden.com/image/download/netflix-background_bGZlbmWUmZqaraWkpJRnbW1lrWZlbWU.jpg"
    alt="bg"
  />

  {/* Dark overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>

  {/* Header */}
  <Header />
<div className="relative z-10 flex justify-center items-center h-screen">
  <form className="bg-black/75 backdrop-blur-md text-white p-14 rounded-lg w-[420px] shadow-2xl">

    <h1 className="text-4xl font-bold mb-8">{signin ? "Sign In " : "Sign Up"}</h1>

    <input
      type="text"
      placeholder="Email or phone number"
      className="w-full p-4 mb-4 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full p-4 mb-6 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
    />

    <button
      className="w-full bg-red-600 py-3 rounded-md font-semibold text-lg hover:bg-red-700 transition duration-200"

    >
      {signin ? "Sign In" : "Sign Up"}
    </button>

    <div className="flex justify-between text-sm text-gray-400 mt-3">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-red-600"/>
        Remember me
      </label>

      <p className="hover:underline cursor-pointer">Need help?</p>
    </div>

    <p className="text-gray-400 mt-8">
      {signin?"New to Netflix?" : "Already An User"}
      <span className="text-white font-semibold hover:underline cursor-pointer" onClick={togglesignin}>
        {signin ? "Sign up now" : "Sign in now"}
      </span>
    </p>

    <p className="text-gray-500 text-xs mt-4">
      This page is protected by Google reCAPTCHA to ensure you're not a bot.
    </p>

  </form>
</div>
</div>
  );
};

export default Login;