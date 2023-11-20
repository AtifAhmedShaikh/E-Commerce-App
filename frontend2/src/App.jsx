import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProductsDetails from "./pages/ProductsDetails";
import AdminLogin from "./pages/AdminLogin";
import ErrorPage from "./pages/ErrorPage";
import UpdateProducts from "./pages/UpdateProducts";
// import useBootUp from "./hooks/useBootUp";
// import Loader from "./components/Loader";

function App() {
  // const [error, loading] = useBootUp();
  // if (!loading) return <Loader />;
  // if (error) return <div>some thing went wrong</div>;
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductListing />} />
        <Route exact path="/products/:id" element={<ProductsDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/admin/overview" element={<UpdateProducts />} />
        <Route exact path="/auth/signUp" element={<SignUp />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
