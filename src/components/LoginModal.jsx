import React, { useEffect, useState } from "react";

const LoginModal = () => {
//   const [isOpen, setIsOpen] = useState(abc);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

    
  return (
    <div className="relative">
      {/* Modal */}
      {/* {isOpen && ( */}
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        //   onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg shadow-lg w-96 p-6"
            // onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              Log <span className="text-pink-600">In</span>
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">User Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700"
              >
                Login
              </button>
            </form>

            {/* Other Links */}
            <div className="text-center mt-4">
              <p className="text-sm">
                Haven't Account?{" "}
                <a href="#signup" className="text-pink-600 underline">
                  Sign Up
                </a>
              </p>
              <p className="text-sm mt-2">
                <a href="#forgot" className="text-pink-600 underline">
                  Forgot Password?
                </a>
              </p>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default LoginModal;
