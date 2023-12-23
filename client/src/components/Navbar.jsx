import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className=" bg-red-600 p-1 mt-0.5 static">
        <div className='container mx-auto'>
          <div className='flex items-center justify-between mr-3 '>
            <div className='flex-shrink-0 '>
               <img src="#" alt="logo" className="w-10 h-12" />
            </div>
            <nav className="space-x-4">
               <ul className="flex space-x-5">
                  <li><NavLink to="/" className="text-white hover:text-gray-900 hover:underline ">Home</NavLink></li>
                  <li><NavLink to="/about" className="text-white hover:text-gray-900 hover:underline">About</NavLink></li>
                  <li><NavLink to="/service" className="text-white hover:text-gray-900 hover:underline">Service</NavLink></li>
                  <li><NavLink to="/contact" className="text-white hover:text-gray-900 hover:underline">Contact</NavLink></li>
                  <li><NavLink to="/register" className="text-white hover:text-gray-900 hover:underline">Register</NavLink></li>
                  <li><NavLink to="/login" className="text-white hover:text-gray-900 hover:underline">Login</NavLink></li>
               </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
