import React, { useState, useEffect } from "react";
import { useProducts } from "./ProductContext";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { products, counter, loading, error, setProducts, setCounter } =
    useProducts();
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (counter > 0) setIsEmpty(false);
    else setIsEmpty(true);
  }, [counter]);

  return <div>{isEmpty && <EmptyCart />}</div>;
};

export default Cart;
