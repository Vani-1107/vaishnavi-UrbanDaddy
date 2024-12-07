import React from "react";
import logo from '../assets/logo-ud.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginModal from "./LoginModal";
const Navbar = () => {
  const [openModal,setOpenModal] = useState(false);
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden text-sm md:flex space-x-6">
          <Link to="/" className="text-red-500">
            Home
          </Link>
          <div className="relative group">
            <button className="flex text-sm items-center">
              Explore <span className="ml-1">&#x25BC;</span>
            </button>
            <ul className="absolute left-0 z-40 hidden bg-gray-800 text-white group-hover:block mt-1">
              <li>
                <Link
                  to="/pestcontrol"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Pest Controls
                </Link>
              </li>
              <li>
                <Link
                  to="/packersMovers"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Packers & Movers
                </Link>
              </li>
              <li>
                <Link
                  to="/waterproofing"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Waterproofing Contractors
                </Link>
              </li>
              <li>
                <Link
                  to="/interiorDesign"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Interior Designers
                </Link>
              </li>
              <li>
                <Link
                  to="/modular"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Modular Kitchen
                </Link>
              </li>
              <li>
                <Link
                  to="/architect"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Architect
                </Link>
              </li>
              <li>
                <Link
                  to="/acservice"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  AC Service
                </Link>
              </li>
              <li>
                <Link
                  to="/generator"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Generator Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/upsRepair"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  UPS Service
                </Link>
              </li>
              <li>
                <Link
                  to="/entrance"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Entrance Exam
                </Link>
              </li> 
              <li>
                <Link
                  to="/college"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  College tuitions
                </Link>
              </li>
              <li>
                <Link
                  to="/distanceEdu"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Distance Education
                </Link>
              </li>
              <li>
                <Link
                  to="/addListing"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link
                  to="/addListing"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  to="/addListing"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link
                  to="/addListing"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  Chartered Accountant
                </Link>
              </li>
              <li>
                <Link
                  to="/addListing"
                  className="block px-4 py-2 text-sm hover:bg-blue-700"
                >
                  ISO Consultant
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/about" className="hover:text-gray-400 text-sm">
            About Us
          </Link>
          <Link to="/listing" className="hover:text-gray-400 text-sm">
            Listing
          </Link>
          <Link to="/blog" className="hover:text-gray-400 text-sm">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-gray-400 text-sm">
            Contacts
          </Link>
        </nav>

        {/* Social Menu */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-white flex items-center hover:text-gray-400"
          >
            <FontAwesomeIcon icon={"sign-in"} className="fa fa-sign-in-alt mr-1 text-sm"></FontAwesomeIcon> Sign In
          </Link>
          <Link
            to="addListing"
            className="bg-white text-blue-900 px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <i className="fas fa-plus-circle text-sm"></i> <span>Add Listings</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;