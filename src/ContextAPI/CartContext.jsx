import  { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/mocks/Products.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.products))
      .catch((e) => console.log(e));
  }, []);

  return (
    <CartContext.Provider value={{ products, setCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider};