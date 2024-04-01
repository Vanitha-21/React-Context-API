import  { createContext,  useState } from "react";
import Products from "../mocks/Products.json";
import PropTypes from 'prop-types';

const ContextContainer = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cardAmount, setCardAmount] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(products.length);


  
  return (
    <ContextContainer.Provider
      value={{
        products,
        setProducts,
        cardQuantity,
        setCardQuantity,
        setCardAmount,
        cardAmount
      }}
    >
      {children}
    </ContextContainer.Provider>
  );
};
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };