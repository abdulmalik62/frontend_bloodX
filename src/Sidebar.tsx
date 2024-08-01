// src/Sidebar.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaOm, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`flex flex-col ${collapsed ? 'w-20' : 'w-64'} bg-gradient-to-r from-white via-red-200 to-red-500 text-white transition-all duration-300 h-screen`}>
      <div className="flex justify-end p-4">
        <button onClick={handleToggle}>
          {collapsed ? <FaArrowRight size={20} /> : <FaArrowLeft size={20} />}
        </button>
      </div>
      <nav className="flex flex-col items-center mt-8">
        <Link to="/all-blood-request" className="flex items-center mb-6">
          <FaOm size={24} />
          {!collapsed && <span className="ml-2">All Blood Request Form</span>}
        </Link>
        <Link to="/requested-data" className="flex items-center mb-6">
          <FaDatabase size={24} />
          {!collapsed && <span className="ml-2">Requested Data</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
