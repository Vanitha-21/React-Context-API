
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./ContextAPI/CartContext.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);