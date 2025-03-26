import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="bg-gray-900 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-lg font-medium hover:text-green-400 transition">Home</Link>
        <Link to="/products" className="text-lg font-medium hover:text-green-400 transition">Products</Link>
        <Link to="/admin" className="text-lg font-medium hover:text-green-400 transition">Admin</Link>
        <Link to="/landing" className="text-lg font-medium hover:text-green-400 transition">Landing</Link>
        <Link to="/user" className="text-lg font-medium hover:text-green-400 transition">User Dashboard</Link>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="/signup" className="px-4 py-2 border border-green-500 rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition">
          Sign Up
        </Link>
        <Link to="/login" className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition">
          Login
        </Link>
      </div> 
    </div>
  </nav>
);

export default Nav;
