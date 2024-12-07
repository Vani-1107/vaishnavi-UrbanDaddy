import React from "react";
import bannerImage from "../assets/banner-2.jpg";
import CategoryCarousel from "../components/CategoryCarousel";
import Listings from "../components/ListingsMainPage";
import ReviewSection from "../components/ReviewSection";
import BlogSection from "../components/BlogSection";
const MainPage = () => {
  return (
    <div>
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[500px]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-8">
          Fast, FREE Way To Get Experts.
        </h1>
        <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-md shadow-lg">
          {/* Keywords Input */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2"></i>
            <input
              type="text"
              className="outline-none text-sm"
              placeholder="Keywords..."
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <i className="fa-solid fa-location-crosshairs text-gray-400 mr-2"></i>
            <input
              type="text"
              className="outline-none text-sm"
              placeholder="Location..."
            />
          </div>

          {/* Category Select */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <i className="fa-solid fa-briefcase text-gray-400 mr-2"></i>
            <select className="outline-none text-sm" >
              <option value="" disabled className="text-black">Choose Category</option>
              <option value="1" className="text-black">Spa & Bars</option>
              <option value="2" className="text-black">Restaurants</option>
              <option value="3" className="text-black">Hotels</option>
              <option value="4" className="text-black">Education</option>
              <option value="5" className="text-black">Business</option>
              <option value="6" className="text-black">Retail & Shops</option>
              <option value="7" className="text-black">Garage & Services</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="bg-red-700 text-white px-7 py-2 rounded-md">
            Search
          </button>
          </div>

          {/* Popular Categories */}
          <div className="mt-6">
            <ul className="flex flex-wrap justify-center gap-4">
              {[
                "Home & Office",
                "Home Improvement",
                "Properties & Rentals",
                "Education & Training",
                "Professional Services",
                "Travel & Transport",
                "Health & Wellness",
                "Events",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-sm text-black bg-gray-300 opacity-50  px-4 py-2 rounded-xl hover:bg-gray-600"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
      
      {/* category  carousel*/}
      <CategoryCarousel/>
      <Listings/>
      <ReviewSection/>
      <BlogSection/>
    </div>
  );
};

export default MainPage;
