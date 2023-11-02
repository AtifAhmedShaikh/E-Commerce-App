import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductState from "./context/products/State.jsx";
import CartState from "./context/cart/CartState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductState>
        <CartState>
        <App />
        </CartState>
      </ProductState>
    </BrowserRouter>
  </React.StrictMode>
);