import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* 1. Content/About */}
        <div>
          <h2 className="text-xl font-bold mb-4">My Company</h2>
          <p className="text-gray-400">
            We provide quality website services. We help you grow your business online.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><Facebook className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Twitter className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Instagram className="text-gray-400 hover:text-white" /></a>
          </div>
        </div>

        {/* 2. Web Page Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">information</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Frequently Quenstions</a></li>
            <li><a href="#" className="hover:text-white">Compare</a></li>
            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
          </ul>
        </div>

        {/* 3. Shop Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Shop</h2>
          <p className="text-gray-400">Cart View One</p>
          <p className="text-gray-400">Cart View Two</p>
          <p className="text-gray-400 ">Empty Cart</p>
          <p className="text-gray-400">Checkout View One</p>
          <p className="text-gray-400">Checkout View Two</p>
          <p className="text-gray-400">Wishlist</p>
        </div>

        {/* 4. Newsletter Signup */}
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-2">Enter your email for the latest news:</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
