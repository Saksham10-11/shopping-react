import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { v4 as uuidv4 } from "uuid";
import { ProductProvider } from "./ProductContext";
import { Badge } from "@mui/material";

const App = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sumOfCounts = products
      .map((item) => item.inCartCount)
      .reduce((acc, count) => acc + count, 0);
    setCounter(sumOfCounts || 0);
  }, [products]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.map((data) => {
          data.id = uuidv4();
          data.inCart = false;
          data.inCartCount = 0;
        });
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-[url('/Images/main-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-opacity-40 bg-gray-800 h-screen px-10">
        <div className="flex flex-row px-40 space-x-10  *:items-center border-b-2 border-opacity-70 border-solid border-white">
          <img src="./Images/logo.png" className="w-20 h-20 bg-transparent" />
          <nav className="flex flex-1 justify-around">
            <ul className="inline-block font-mono text-2xl font-semibold text-white *:inline-block pt-4 *:px-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <div className="mt-6 cursor-pointer">
            <Badge badgeContent={counter} color="secondary">
              <ShoppingCartIcon style={{ color: "white", fontSize: 40 }} />
            </Badge>
          </div>
        </div>
      </div>
      <div className="bg-opacity-40 bg-gray-800">
        <ProductProvider
          value={{ products, counter, loading, error, setProducts, setCounter }}
        >
          <Outlet />
        </ProductProvider>
      </div>
    </div>
  );
};

export default App;
