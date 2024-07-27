import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Card = ({ props, handleClick }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/cart");
  };

  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 shadow-md justify-center">
      <img
        src={props.image}
        alt={props.title}
        className="w-40 h-40 object-center rounded-md mb-4 mx-auto"
      />
      <h1 className="text-lg font-semibold text-gray-800 mb-2">
        {props.title}
      </h1>
      <h1 className="text-xl font-bold text-gray-900 mb-2">$ {props.price}</h1>
      <h1 className="text-sm text-gray-600 mb-4">
        Rating: {props.rating.rate}/5 ({props.rating.count} reviews)
      </h1>
      {props.inCart && (
        <Button
          variant="contained"
          color="success"
          id="{props.id}"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      )}
      {!props.inCart && (
        <Button
          variant="contained"
          color="success"
          id={props.id}
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default Card;
