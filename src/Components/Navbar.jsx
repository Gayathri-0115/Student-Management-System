import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // install lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-purple-300 sticky top-0 w-full shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo / Title */}
        <h2 className="text-white text-xl md:text-2xl font-bold font-serif">
          Student Management System
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[18px] font-semibold text-purple-900 font-sans">
          <Link to="/">
          <li className="px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]">
            Home
          </li>
          </Link>

            <Link to="/add">
            <li className="px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]">
              Add
            </li>
            </Link>
         
          <Link to="/display">
            <li className="px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]">
              Display
            </li>
            </Link>
         
          <Link to="/editdelete">
            <li className="px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]">
              Edit/Delete
            </li>
            </Link>
          
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-purple-600 backdrop-blur-lg">
          <ul className="flex flex-col gap-4 p-4 text-white text-lg font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)} >
            <li className="px-4 py-2 hover:bg-purple-500 rounded-md">Home</li>
            </Link>

            <Link to="/add" onClick={() => setIsOpen(false)} >
             <li className="px-4 py-2 hover:bg-purple-500 rounded-md">Add</li>
            </Link>
           
           <Link to="/display"  onClick={() => setIsOpen(false)} >
            <li className="px-4 py-2 hover:bg-purple-500 rounded-md">Display</li>
           </Link>
            
            <Link to="/editdelete" onClick={() => setIsOpen(false)} >
            <li className="px-4 py-2 hover:bg-purple-500 rounded-md">Edit/Delete</li>           
            </Link>
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
