// ProductContext.js
import React, { createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children, value }) => (
  <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
);

export const useProducts = () => useContext(ProductContext);
