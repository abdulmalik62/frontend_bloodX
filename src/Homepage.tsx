// src/HomePage.tsx
import React from 'react';
import BloodRequestForm from './BloodRequestForm';
import NavbarContainer from './NavbarContainer';

const HomePage: React.FC = () => {
  
  return (
    <div className="flex">
      <div className="flex-1 min-h-screen bg-gray-100">
        <NavbarContainer />
        <div className="p-8">
        </div>
        <div>
          <BloodRequestForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
