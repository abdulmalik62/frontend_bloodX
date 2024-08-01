// src/LoginPage.tsx
import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import './LoginPage.css';

interface LoginPageProps {
  auth: boolean | null;
  handleLogin: (e: React.FormEvent) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ auth, handleLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === true) {
      navigate('/home');
    }
  }, [auth, navigate]);

  if (auth === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="login-box w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl">
            Blood<span className="mr-4xl font-semibold text-red-500">X</span>
          </h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or Phone Number
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Sign-In
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to the Blood Donation site's Conditions of Use and Privacy Notice.
        </p>
        <button className="w-full py-2 mt-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Create your Blood Donation account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
