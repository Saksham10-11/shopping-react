import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shop");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <div className="h-48 w-96 p-8 bg-white rounded shadow-md text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Your cart is currently empty
        </p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleNavigate}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
