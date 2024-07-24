import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[url('/Images/main-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-row">
        <nav>
          <img src="logo.png" alt="" />
          <ul>
            <li className="inline-block">
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
          </ul>
          <img src="cart.png" alt="" />
        </nav>
      </div>
    </div>
  );
};

export default App;
