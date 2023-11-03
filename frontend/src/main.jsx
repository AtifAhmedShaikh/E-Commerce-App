import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductState from "./context/products/State.jsx";
import CartState from "./context/cart/CartState.jsx";
import WishListState from "./context/wishList/State.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductState>
        <CartState>
          <WishListState>
             <App />
            </WishListState>
        </CartState>
      </ProductState>
    </BrowserRouter>
  </React.StrictMode>
);