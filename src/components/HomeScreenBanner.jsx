import React from "react";
import { Link } from "react-router-dom";

const HomeScreenBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white bg-gray-800 bg-opacity-40">
      <h1 className="text-6xl font-bold mb-4">Welcome to H&M</h1>
      <p className="text-2xl mb-8">
        Discover our latest collection and find your perfect style.
      </p>
      <Link to="/shop">
        <button className="px-8 py-4 text-xl font-semibold bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-full">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default HomeScreenBanner;
