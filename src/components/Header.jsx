import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
   const naviagte = useNavigate();
  

 useEffect(()=>{
       onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid , email ,displayName }= user;
        dispatch(addUser({uid:uid,email:email, displayname:displayName}))
        naviagte("/browse")
    } else {
        dispatch(removeUser());
        naviagte("/")
    }
});
 },[])

 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="absolute top-0 left-0 w-full px-12 py-6 bg-gradient-to-b from-black z-50 flex justify-between items-center">

      {/* Logo */}
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />

      {/* Profile Section */}
      <div className="relative">

        {/* Profile Icon */}
        <img
          onClick={toggleMenu}
          className="w-10 rounded cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
        />

        {/* Dropdown */}
        {showMenu && (
          <div className="absolute right-0 mt-3 w-56 bg-black text-white rounded shadow-lg">

            {/* Arrow */}
            <div className="absolute -top-2 right-4 w-3 h-3 bg-black rotate-45"></div>

            {/* Content */}
            <div className="p-4 space-y-3 text-sm">

              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="user"
                />
                <p>{user?.email}</p>
              </div>

              <hr className="border-gray-600" />

              <p className="hover:underline cursor-pointer">Profile</p>
              <p className="hover:underline cursor-pointer">Manage Profiles</p>
              <p className="hover:underline cursor-pointer">Account</p>
              <p className="hover:underline cursor-pointer">Help Centre</p>

              <hr className="border-gray-600" />

              <button className="text-red-500 hover:underline cursor-pointer" >
                Sign Out of Netflix
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;