import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import address from '../assets/add.svg';
import call from '../assets/call.svg';
import img1 from '../assets/l-1.jpg';
import img2 from '../assets/l-4.jpg';
import img3 from '../assets/l-5.jpg';
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
// import close from '../assets/close.png';

const listings = [
  {
    id: 1,
    badge: "Now Open",
    category: "Hotel",
    title: "Shree Satyam Burger House",
    price: "$45 - $70",
    image: img1,
    reviews: 42,
    address: "2014 Bastin Drive, USA",
    phone: "91 548 548 7549",
    author: { name: "Daniel Preet", date: "3 days ago", image:user1},
  },
  {
    id: 2,
    badge: "Closed",
    category: "Wedding",
    title: "Mangalam Wedding Planner",
    price: "$45 - $70",
    featured: true,
    image: img2,
    reviews: 42,
    address: "3244 Coulter Lane, Canada",
    phone: "91 548 548 7549",
    author: { name: "Reema Preet", date: "4 days ago", image: user2 },
  },
  {
    id: 3,
    badge: "Now Open",
    category: "Message",
    title: "Shruthi Spa & Massage",
    price: "$45 - $70",
    image: img3,
    reviews: 42,
    address: "611 Meadow Drive, London",
    phone: "91 548 548 7549",
    author: { name: "Daniel Joe", date: "1 day ago", image: user3 },
  },
  // Add more listings as needed...
];

const ListingCard = ({ listing }) => (
  <div className="border rounded-lg shadow-md overflow-hidden relative">
    <div className={`absolute top-2 left-2 z-20 px-3 py-1 text-white rounded ${listing.badge === "Now Open" ? "bg-green-500" : "bg-red-500"}`}>
      {listing.badge}
    </div>
    {listing.featured && <div className="absolute top-2 right-2 px-3 py-1 bg-yellow-400 text-black rounded">Featured</div>}

    <div className="relative h-52">
    <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
    <div className="absolute bottom-2 px-3">
    <div className="flex justify-between items-center gap-2">
        <span className="text-sm bg-white  text-black py-1 px-4 shadow-md rounded-xl">{listing.category}</span>
        <span className="text-sm bg-white  text-black py-1 px-4 shadow-md rounded-xl ">{listing.price}</span>
      </div>
    </div>
    </div>
    <div className="p-4">
      
      <h4 className="text-lg font-semibold mb-1">{listing.title}</h4>
      <div className="flex items-center mb-2 text-yellow-500">
        {[...Array(4)].map((_, index) => (
          <FontAwesomeIcon icon={faStar} className="fas fa-star"></FontAwesomeIcon>
        ))}
        <FontAwesomeIcon icon={faStar} color="gray"></FontAwesomeIcon>
        <span className="text-sm text-gray-500 ml-2">({listing.reviews} Reviews)</span>
      </div>
      <ul className="text-sm text-gray-500 mb-4">
        <li className="flex items-center">
          <img src={address} alt="Address" className="w-4 h-4 mr-2" />
          {listing.address}
        </li>
        <li className="flex items-center">
          <img src={call} alt="Phone" className="w-4 h-4 mr-2" />
          {listing.phone}
        </li>
      </ul>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={listing.author.image} alt={listing.author.name} className="w-8 h-8 rounded-full mr-2" />
          <div>
            <h5 className="text-sm font-medium">{listing.author.name}</h5>
            <span className="text-xs text-gray-400">{listing.author.date}</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
      </div>
    </div>
  </div>
);

const Listings = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold">Featured</h2>
      <h3 className="text-4xl font-bold text-gray-700">
        Top Rated <span className="text-red-500">Places</span>
      </h3>
    </div>
    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
    <div className="text-center mt-8">
      <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded">Explore More Listings</button>
    </div>
  </div>
);

export default Listings;