import  { useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../ContextAPI/CartContext.jsx";

function Home() {
  const { products } = useContext(CartContext);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;