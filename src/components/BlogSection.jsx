import React from "react";
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.webp';
import banner4 from '../assets/banner4.webp';
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      author: "Sai Vishal Kannan",
      title: "Top 10 Best Ways To Keep Your Appliances Running This Winter",
      description:
        "Before identifying a potential appliance issue, homeowners don't pay heed to the situation. This leads to tremendous risks due to wear and tear and technical malfunction. Also, a hazardous situation arises when an appliance functions despite meetin...",
      image: banner2,
      tags: ["Health", "Business"],
      banner: "Looking for ? Interior Designers",
      buttonText: "Get Best Quotes",
    },
    {
      id: 2,
      author: "Adhithiya Rajasekar",
      title: "9 Tips To Decorate Your Home This Winter",
      description:
        "The best season of the year has arrived. It’s time to decorate your home in the best possible ways to add warmth to this winter. Let your imagination grow this winter, brighten your home, and elevate your mood. If you are wondering how to start? Leverage your mood and ...",
      image: banner3,
      tags: ["Banking", "Stylish"],
      banner: "Packers & Movers",
      buttonText: "Get Best Deal",
    },
    {
      id: 3,
      author: "Niviya Chanchez",
      title: "Stay Cozy And Comfortable This Winter With Cool Living Ideas",
      description:
        "Nothing is more comforting than staying warm and cozy inside the house on a cold winter day. Most of us would prefer to snuggle inside our beds or sofas, sipping some hot beverage by the fireside when it’s freezing cold outside. What makes us mo...",
      image: banner4,
      tags: ["Fashion", "Wedding"],
      banner: "Search, compare prices & book hotels",
      buttonText: "Get Best Deals",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            We've Got It <span className="text-pink-600">Blogged</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Your Best Practices Guide for all your local service needs.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Banner Section */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h4 className="text-gray-800 text-xs font-semibold mb-2">
                  {blog.author}
                </h4>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;