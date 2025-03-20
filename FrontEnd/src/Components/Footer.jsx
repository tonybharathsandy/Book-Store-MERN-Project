import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section - Logo & Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">📚 Book Store</h2>
            <p className="text-gray-400 mt-2">Your one-stop shop for all your reading needs.</p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex space-x-6 text-gray-300 text-sm">
          <Link to={"/"}  className="hover:text-white">Home</Link>
          <Link to={"/"}  className="hover:text-white">About</Link>
          <Link to={"/"}  className="hover:text-white">Contact</Link>
          <Link to={"/"}  className="hover:text-white">Categories</Link>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank"  className="text-gray-400 hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Book Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
