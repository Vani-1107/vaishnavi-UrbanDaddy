import React, { useState } from "react";
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.webp';
import banner4 from '../assets/banner4.webp';

const BlogCard = ({ title, author, description, tags, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={image}
                alt={title}
                className="h-40 w-full object-cover"
            />
            <div className="p-4">
                <p className="text-sm text-gray-500">{author}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-300 text-black px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Blog = () => {
    const blogs = [
        {
            title: "Top 10 Best Ways To Keep Your Appliances Running This Winter",
            author: "Sai Vishal Kannan",
            description:
                "Before identifying a potential appliance issue, homeowners don't pay heed to the situation...",
            tags: ["Health", "Business"],
            image: banner2,
        },
        {
            title: "9 Tips To Decorate Your Home This Winter",
            author: "Adhithiya Rajasekar",
            description:
                "The best season of the year has arrived. It's time to decorate your home in the best possible ways...",
            tags: ["Banking", "Stylish"],
            image: banner3,
        },
        {
            title: "Stay Cozy And Comfortable This Winter With Cool Living",
            author: "Niviya Chanchez",
            description:
                "Nothing is more comforting than staying warm and cozy inside the house on a cold winter day...",
            tags: ["Fashion", "Wedding"],
            image: banner4,
        },
        {
            title: "Top 10 Best Ways To Keep Your Appliances Running This Winter",
            author: "Sai Vishal Kannan",
            description:
                "Before identifying a potential appliance issue, homeowners don't pay heed to the situation...",
            tags: ["Health", "Business"],
            image: banner2,
        },
        {
            title: "9 Tips To Decorate Your Home This Winter",
            author: "Adhithiya Rajasekar",
            description:
                "The best season of the year has arrived. It's time to decorate your home in the best possible ways...",
            tags: ["Banking", "Stylish"],
            image: banner2,
        },
        {
            title: "Stay Cozy And Comfortable This Winter With Cool Living",
            author: "Niviya Chanchez",
            description:
                "Nothing is more comforting than staying warm and cozy inside the house on a cold winter day...",
            tags: ["Fashion", "Wedding"],
            image: banner2,
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="w-full h-[150px] bg-gray-600 flex items-center">
                <div className="pl-24">
                    <h1 className="text-3xl font-bold text-white">Our Articles</h1>
                    <p className="text-white italic text-xs">See Our Latest Articles & News</p>
                </div>
            </div>
            <div className="mt-16 mb-10 mx-auto">
                <h2 className="text-4xl text-center font-bold">
                    We've Got It <span className="text-pink-600">Blogged</span>
                </h2>
                <p className="text-gray-600 text-sm mt-2 text-center">
                    Your Best Practices Guide for all your local service needs.
                </p>
            </div>
            <div className="bg-gray-50 min-h-screen p-6 mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentBlogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                title={blog.title}
                                author={blog.author}
                                description={blog.description}
                                tags={blog.tags}
                                image={blog.image}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center space-x-2 mt-6">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-md ${currentPage === 1
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-blue-400 text-white hover:bg-blue-400"
                                }`}
                        >
                            &laquo;
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded-md ${currentPage === i + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-500"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-md ${currentPage === totalPages
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-blue-400 text-white hover:bg-blue-400"
                                }`}
                        >
                            &raquo;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;





// const Blog = () => {
//     return (
//         <div>
//             <div className="w-full h-[150px] bg-gray-600 flex items-center">
//                 <div className="pl-24">
//                     <h1 className="text-3xl font-bold text-white">Our Articles</h1>
//                     <p className="text-white italic text-xs">See Our Latest Articles & News</p>
//                 </div>
//             </div>
//             <div className="mt-16 mb-10 mx-auto">
//                 <h2 className="text-4xl text-center font-bold">
//                     We've Got It <span className="text-pink-600">Blogged</span>
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-2 text-center">
//                     Your Best Practices Guide for all your local service needs.
//                 </p>
//             </div>
//         </div>
//     )
// }
// export default Blog;