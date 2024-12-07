import banner from '../assets/banner-2.jpg';
import { useState } from 'react';

const AddListing = () => {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const [businessHours, setBusinessHours] = useState(
        daysOfWeek.map(() => ({ open: "", close: "" }))
    );
    const [isOpen24x7, setIsOpen24x7] = useState(false);
    // const [priceRange, setPriceRange] = useState({ from: "", to: "" });

    const handleTimeChange = (index, type, value) => {
        const updatedHours = [...businessHours];
        updatedHours[index][type] = value;
        setBusinessHours(updatedHours);
    };

    const [priceRange, setPriceRange] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    const priceOptions = [
        { label: "$ - Inexpensive", value: "$" },
        { label: "$$ - Moderate", value: "$$" },
        { label: "$$$ - Expensive", value: "$$$" },
        { label: "$$$$ - Very Expensive", value: "$$$$" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Price Range:", priceRange);
        console.log("Price From:", priceFrom);
        console.log("Price To:", priceTo);
    };


    return (
        <div className='bg-gray-100 pb-10'>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[150px]"
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full text-white pl-48">
                    <div className='text-3xl font-bold'>Add Listing</div>
                    <div className='font-semibold italic'>Submit your listing & grow</div>
                </div>
            </div>

            <div className="flex justify-center items-center bg-gray-100 pt-8">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                    <h2 className="text-lg font-semibold text-gray-700 border-b pb-4">
                        General Information
                    </h2>
                    <form className="mt-6 space-y-6">
                        {/* Listing Title */}
                        <div>
                            <label
                                htmlFor="listingTitle"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Listing Title<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="listingTitle"
                                placeholder="Title"
                                className="mt-1 p-2 shadow-sm block w-full bg-gray-100 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                className="mt-1 shadow-sm block w-full  p-2 bg-gray-100 border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>Choose Category</option>
                                <option>Cafe & Restaurant</option>
                                <option>Business</option>
                                <option>Education</option>
                                <option>Sports & Gym</option>
                                <option>Hotel & Villa</option>
                            </select>
                        </div>

                        {/* Tagline */}
                        <div>
                            <label
                                htmlFor="tagline"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tagline
                            </label>
                            <input
                                type="text"
                                id="tagline"
                                placeholder="Tagline"
                                className="mt-1 block w-full  p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                placeholder="Listing Description"
                                className="mt-1 block w-full  p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-8">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 space-y-10">
                    {/* Gallery Section */}
                    <div className="border rounded-md p-4">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="border-2 border-dashed border-gray-300 rounded-md h-32 flex items-center justify-center"
                                >
                                    <span className="text-gray-400">+</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Maximum file size: 2 MB.</p>
                    </div>

                    {/* Location Information Section */}
                    <div className="border rounded-md p-4">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                            Location Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            {/* Country */}
                            <div>
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Country
                                </label>
                                <select
                                    id="country"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>India</option>
                                </select>
                            </div>

                            {/* City */}
                            <div>
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    City
                                </label>
                                <select
                                    id="city"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>New York</option>
                                    <option>San Francisco</option>
                                    <option>Los Angeles</option>
                                </select>
                            </div>

                            {/* Location */}
                            <div className="col-span-2">
                                <label
                                    htmlFor="location"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="e.g. 34 Wigmore Street, London"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Latitude */}
                            <div>
                                <label
                                    htmlFor="latitude"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Latitude
                                </label>
                                <input
                                    type="text"
                                    id="latitude"
                                    value="40.4980073"
                                    readOnly
                                    className="mt-1 p-2 block w-full border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            {/* Longitude */}
                            <div>
                                <label
                                    htmlFor="longitude"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Longitude
                                </label>
                                <input
                                    type="text"
                                    id="longitude"
                                    value="51.4980073"
                                    readOnly
                                    className="mt-1 block w-full border-gray-300 p-2 bg-gray-100 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 pt-8 flex justify-center">
                <div className="w-full max-w-4xl space-y-8">
                    {/* Business Information Section */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                            Business Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="business@gmail.com"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    placeholder="91 245 254 8745"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Website */}
                            <div>
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Website
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    placeholder="https://yoursite.com/"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Fax Number */}
                            <div>
                                <label
                                    htmlFor="fax"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Fax No
                                </label>
                                <input
                                    type="text"
                                    id="fax"
                                    placeholder="256 254 7854"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Address */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="e.g. 34 Wigmore Street, Canada"
                                    className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Social Account Section */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                            Social Account
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                            {[
                                "Facebook URL",
                                "Google+ URL",
                                "LinkedIn URL",
                                "Twitter URL",
                                "Instagram URL",
                                "Tumblr URL",
                                "Pinterest URL",
                                "Vimeo URL",
                                "Envato URL",
                            ].map((label, index) => (
                                <div key={index}>
                                    <label
                                        htmlFor={label.toLowerCase().replace(" ", "-")}
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {label}
                                    </label>
                                    <input
                                        type="url"
                                        id={label.toLowerCase().replace(" ", "-")}
                                        placeholder={label}
                                        className="mt-1 p-2 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 pt-8 flex justify-center">
                <div className="w-full max-w-4xl space-y-8">
                    {/* Video Link Section */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                            Video Link
                        </h2>
                        <div className="mt-4">
                            <label
                                htmlFor="video-link"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Video Link
                            </label>
                            <input
                                type="url"
                                id="video-link"
                                placeholder="Enter video link"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Listing Amenity Section */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                            Listing Amenity
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {[
                                "Restaurant",
                                "Room Service",
                                "Bar/Lounge",
                                "Concierge",
                                "Banquet Room",
                                "Breakfast Available",
                                "WiFi Available",
                                "Reservations",
                                "Waitstaff",
                                "Valet Parking",
                                "Wheelchair Accessible",
                                "Serves Alcohol",
                                "Full Bar",
                                "Food & Drink",
                                "Real Massage",
                                "Relaxing Hour",
                                "Foot Massage",
                                "State Street",
                            ].map((amenity, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`amenity-${index}`}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <label
                                        htmlFor={`amenity-${index}`}
                                        className="ml-2 text-sm text-gray-700"
                                    >
                                        {amenity}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-100 p-4">
                <div className="w-full max-w-4xl mx-auto space-y-8">
                    {/* Business Hours */}
                    <div className='bg-white shadow-md rounded-lg p-6'>
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-2">Business Hours</h2>
                        {daysOfWeek.map((day, index) => (
                            <div key={day} className="flex items-center mb-2 space-x-4">
                                <span className="w-1/5 text-sm">{day}</span>
                                <select
                                    className="w-2/5 px-3 py-2 border rounded-md"
                                    value={businessHours[index].open}
                                    onChange={(e) =>
                                        handleTimeChange(index, "open", e.target.value)
                                    }
                                    disabled={isOpen24x7}
                                >
                                    <option value="">Opening Time</option>
                                    {/* Add time options */}
                                    {[...Array(24)].map((_, i) => (
                                        <option key={i} value={`${i}:00`}>
                                            {i}:00
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="w-2/5 px-3 py-2 border rounded-md"
                                    value={businessHours[index].close}
                                    onChange={(e) =>
                                        handleTimeChange(index, "close", e.target.value)
                                    }
                                    disabled={isOpen24x7}
                                >
                                    <option value="">Closing Time</option>
                                    {/* Add time options */}
                                    {[...Array(24)].map((_, i) => (
                                        <option key={i} value={`${i}:00`}>
                                            {i}:00
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={isOpen24x7}
                                onChange={() => setIsOpen24x7(!isOpen24x7)}
                            />
                            <label className='text-xs text-gray-600'>This Business open 7x24</label>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className='bg-white shadow-md rounded-lg p-6'>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Price Range</h2>
                            <div className='flex flex-row w-full gap-2'>
                                {/* Dropdown for Price Range */}
                                <div className="mb-4 w-[32%]">
                                    <label className="block text-sm  mb-2">Price Range</label>
                                    <select
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md"
                                    >
                                        <option value="" disabled className=' '>

                                        </option>
                                        {priceOptions.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Input fields for Price From and Price To */}
                                <div className="flex w-[68%] items-center space-x-4 mb-4">
                                    <div className="w-1/2">
                                        <label className="block text-sm mb-2">
                                            Price From ($)
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="e.g: 70"
                                            value={priceFrom}
                                            onChange={(e) => setPriceFrom(e.target.value)}
                                            className="w-full bg-gray-100 px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium mb-2">Price To ($)</label>
                                        <input
                                            type="number"
                                            placeholder="e.g: 110"
                                            value={priceTo}
                                            onChange={(e) => setPriceTo(e.target.value)}
                                            className="w-full px-3 bg-gray-100 py-2 border rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Submit Button */}
            <div className="text-center pt-6 w-full">
                <button
                    type="submit"
                    className="bg-pink-600 w-[59%] mx-auto text-white px-6 py-2 rounded-md hover:bg-pink-700"
                >
                    Submit & Preview
                </button>
            </div>
        </div>
    )
};

export default AddListing;

