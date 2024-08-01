// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">BloodX</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
