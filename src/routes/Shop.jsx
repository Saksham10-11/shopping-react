import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ErrorPage from "../error-page";
import { useProducts } from "./ProductContext";

const Shop = () => {
  const { products, counter, loading, error, setProducts, setCounter } =
    useProducts();
  const handleClick = (event) => {
    const id = event.target.id;
    let changed_products = products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: true, inCartCount: 1 };
      }
      return product;
    });
    setProducts(changed_products);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="h-screen w-screen overflow-y-auto grid grid-cols-4 gap-6 px-10 py-10 pb-40">
      {products.map((product) => (
        <Card props={product} handleClick={handleClick} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
