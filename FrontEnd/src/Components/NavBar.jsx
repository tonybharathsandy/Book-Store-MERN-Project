import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/ContextApi";

function NavBar() {

    const {currentUser, logOut} = useAuth()

  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const cartItems = useSelector(store => store.cart.cartItem)

  const handleLogOut = () => {
    logOut()
  }

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side - Logo & Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl"
          >
            <FaBars />
          </button>
          <NavLink to="/" className="text-xl font-bold text-gray-800">
            MyStore
          </NavLink>
        </div>

        {/* Search Bar - Hidden on Small Screens */}
        <div className="hidden md:flex flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-6 text-2xl relative">
          {/* Profile Icon with Dropdown */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="focus:outline-none flex items-center gap-2"
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full border border-gray-300 hover:border-blue-400 transition"
                />
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md p-2 z-50 text-sm border border-gray-200">
                  <NavLink
                    to="/dashboard"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/orders"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
                  >
                    Orders
                  </NavLink>
                  <NavLink
                    to="/cartpage"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
                  >
                    Cart Page
                  </NavLink>
                  <NavLink
                    to="/checkout"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
                  >
                    Check Out
                  </NavLink>
                  <hr className="my-1" />
                  <button
                    onClick={() => {handleLogOut(); setProfileOpen(false)}}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" className="hover:text-blue-500 transition">
              <IoPersonCircle />
            </NavLink>
          )}

          {/* Favorites Icon */}
          <NavLink to="/favorites">
            <FaRegHeart className="hover:text-red-500 transition" />
          </NavLink>

          {/* Cart Icon with Badge */}
          <NavLink to="/cart" className="relative">
            <IoCartOutline className="hover:text-green-500 transition" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
             {cartItems.length > 0  ? cartItems.length : 0} 
            </span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md mb-3"
          />
          <div className="flex flex-col gap-3 text-lg">
            <NavLink to="/profile" className="hover:text-blue-500">
              Profile
            </NavLink>
            <NavLink to="/favorites" className="hover:text-red-500">
              Favorites
            </NavLink>
            <NavLink to="/cart" className="hover:text-green-500">
              Cart
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
