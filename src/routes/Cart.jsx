import React, { useState, useEffect } from "react";
import { useProducts } from "./ProductContext";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";

const Cart = () => {
  const { products, counter, loading, error, setProducts, setCounter } =
    useProducts();
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (counter > 0) setIsEmpty(false);
    else setIsEmpty(true);
  }, [counter]);

  return (
    <div className="bg-gray-600 bg-opacity-10">
      {isEmpty && <EmptyCart />}
      {!isEmpty && <FilledCart props={{ products, setProducts }} />}
    </div>
  );
};

export default Cart;
