import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-12 py-6 bg-gradient-to-b from-black z-10">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default Header;