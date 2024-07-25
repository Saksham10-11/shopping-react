import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IoBag } from "react-icons/io5";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[url('/Images/main-background.jpg')] bg-cover bg-center bg-no-repeat">
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
          <IoBag size={65} color="white" />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
