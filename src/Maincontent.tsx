// src/components/MainContent.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Header from './Header';
import { getUser, signIn } from './authConfig';
const MainContent: React.FC = () => {

    const [auth, setAuth] = useState<boolean | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
      // Check if user is already authenticated
      getUser().then(user => {
        if (user) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      });
    }, []);
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      // Redirect to the OIDC login page
      signIn();
    };
  
    if (auth === null) {
      return <div>Loading...</div>;
    }
  
    if (auth === true) {
      return <Navigate to="/home" />;
    }
  return (

    <div>
            <Header />
        <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-red-600 text-white">
      <div className="absolute top-10 left-10 space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
        ))}
      </div>
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-5xl font-bold mb-2">Welcome to</h1>
        <h2 className="text-6xl font-bold mb-4">BloodX</h2>
        <button onClick={handleLogin} className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
      <div className="absolute bottom-20 right-40">
     
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" d="M0,224L48,224C96,224,192,224,288,186.7C384,149,480,75,576,64C672,53,768,107,864,133.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-red-700 rounded-full"></div>
          <div className="w-2 h-2 bg-red-300 rounded-full"></div>
          <div className="w-2 h-2 bg-red-300 rounded-full"></div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default MainContent;
