import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const InteriorDesign = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 pb-7">
            {/* Breadcrumb */}
            <div className="text-gray-600 text-sm py-4 px-6">
                Ranchi / Interior Designers & Decorators in Ranchi / <span className="font-medium">1665+ Listings</span>
            </div>
            <div className="text-center mb-6 p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                Best Interior Designers in Ranchi
                </h1>
                <p className="text-gray-600 mt-1 text-sm">
                Fast, FREE way to connect to right Chennai Interior Designers
                </p>
            </div>
            {/* Main Content */}
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg ">
                {/* Service Options */}
                <div className="p-4">
                    <div className="font-bold text-sm pb-4">What type of design services do you require?</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-md shadow-md">
                                <span className="text-gray-800">Home Interiors</span>
                            <FontAwesomeIcon icon={faChevronCircleRight} className=" text-red-500"></FontAwesomeIcon>
                        </button>
                        <button className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-md shadow-md">
                        <span className="text-gray-800">Office/commercial Interiors</span>
                            <FontAwesomeIcon icon={faChevronCircleRight} className=" text-red-500"></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

                {/* Get Started Button */}
                <div className="text-center mt-6">
                    <button className="bg-red-500 text-white font-semibold px-20 py-3 rounded-md shadow hover:bg-pink-400">
                        Get Started
                    </button>
                </div>
                <div className="mt-8 bg-gray-100 py-6">
                    <div className="text-center font-bold pb-4">Why Urban Daddy?</div>
                    <div className="max-w-4xl mx-auto flex justify-around text-center">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">15+</h3>
                            <p className="text-gray-600 text-sm">Years of Expertise</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">50000+</h3>
                            <p className="text-gray-600 text-sm">Happy Users</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">9000+</h3>
                            <p className="text-gray-600 text-sm">Verified Service Providers</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InteriorDesign;