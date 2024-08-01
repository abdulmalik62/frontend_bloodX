import React, { useState, useEffect } from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";
import authConfig from './authConfig';

interface NavbarProps {
  username: string;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ username, onLogout }) => {


 
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="ml-2 text-xl font-semibold">Blood<span className="mr-4 xl font-semibold text-red-500">X</span></h1>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-lg">{username}</span>
        <button 
          onClick={onLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
