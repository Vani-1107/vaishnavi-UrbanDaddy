import React from "react";
import { categories } from "../components/dummyDataListing";

const ListingSection = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="w-full h-[150px] bg-gray-600 flex items-center">
        <div className="pl-24">
          <h1 className="text-3xl font-bold text-white">Our Listing</h1>
          <p className="text-white italic text-xs">Who we are & our mission</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {categories.map((category, index) => (
          <div key={index} className="mb-10">
            {/* Section Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {category.title}
            </h2>

            {/* Horizontal Scrollable Section */}
            <div className="relative">
              {/* Scrollable Container */}
              <div className="flex gap-4 overflow-x-auto no-scrollbar">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden w-72"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.experts}{" "}
                        {item.title.includes("Properties")
                          ? "verified"
                          : "Experts"}
                      </p>
                      <button className="mt-4 bg-red-500 text-white text-sm font-medium px-4 py-2 rounded">
                        {item.button}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ListingSection;