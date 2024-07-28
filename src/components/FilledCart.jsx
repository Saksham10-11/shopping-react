import React, { useEffect, useState } from "react";

const FilledCart = ({ props }) => {
  const [inCartProducts, setInCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const { reducedProducts, itemTotal } = props.products.reduce(
      (acc, item) => {
        if (item.inCart) {
          acc.reducedProducts.push(item);
          acc.itemTotal += item.inCartCount * item.price;
        }
        return acc;
      },
      { reducedProducts: [], itemTotal: 0 }
    );
    setInCartProducts(reducedProducts);
    setTotal(itemTotal.toFixed(2));
  }, [props.products]);

  const handleRemove = (event) => {
    const id = event.target.id;
    const updatedProducts = props.products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: false, inCartCount: 0 };
      }
      return product;
    });
    props.setProducts(updatedProducts);
  };

  const handleInc = (event) => {
    const id = event.target.id;
    const updatedProducts = props.products.map((product) => {
      if (product.id === id) {
        return { ...product, inCartCount: product.inCartCount + 1 };
      }
      return product;
    });
    props.setProducts(updatedProducts);
  };

  const handleDec = (event) => {
    const id = event.target.id;
    const updatedProducts = props.products.map((product) => {
      if (product.id === id) {
        return { ...product, inCartCount: product.inCartCount - 1 };
      }
      return product;
    });
    props.setProducts(updatedProducts);
  };

  return (
    <div className="w-screen h-screen bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="bg-transparent p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Your shopping Cart
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 space-y-4">
              <div className="overflow-auto h-650 pb-8 pr-8">
                {inCartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg my-4 first:mt-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 mx-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <div className="flex items-center mt-2">
                        <button
                          id={item.id}
                          className="px-2 py-1 text-xl text-green-600"
                          onClick={handleDec}
                          disabled={item.inCartCount === 1}
                        >
                          −
                        </button>
                        <span className="mx-2">{item.inCartCount}</span>
                        <button
                          id={item.id}
                          className="px-2 py-1 text-xl text-green-600"
                          onClick={handleInc}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-lg font-semibold">${item.price}</div>
                    <button
                      id={item.id}
                      onClick={handleRemove}
                      className="text-red-600 ml-4"
                    >
                      Remove ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg h-550">
              <h2 className="text-xl font-semibold mb-4">Estimated total</h2>
              <div className="text-2xl font-bold mb-6">${total}</div>
              <button className="w-full py-2 bg-green-500 text-white rounded-lg">
                Proceed to checkout
              </button>
              <div className="mt-10">
                <img
                  src="./Images/paypal.png"
                  alt="PayPal"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
