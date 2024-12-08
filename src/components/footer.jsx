import React from "react";
import revealLogo from '../assets/logo-light.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8  ">
      <div className="w-[80%] container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Address */}
        <div>
          <a href="#" className="flex items-center mb-4">
            <img
              src={revealLogo}
              alt="Reveal Logo"
              className="h-10 w-auto"
            />
            {/* <span className="ml-2 text-xl font-semibold ">Reveal</span> */}
          </a>
          <p className="text-sm">407-472 Rue Saint-Sulpice, Montreal</p>
          <p className="text-sm">Quebec, H2Y 2V8</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                FAQs Page
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Developers</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Stays
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Adventures
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Author Detail
              </a>
            </li>
          </ul>
        </div>

        {/* More Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-40 text-sm0">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-sm">
                Privacy & Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
