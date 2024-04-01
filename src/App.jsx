import { Routes, Route } from "react-router-dom";
import Header from "./Components/Cart.jsx";
import Home from "./Components/Home.jsx";
import Cart from "./Components/Header.jsx";
import { CartProvider } from "./ContextAPI/CartContext.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}


export default App;
