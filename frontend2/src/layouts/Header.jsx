import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import {
  CartIcon,
  ChartBarIcon,
  HomeIcon,
} from "../components/icons/HeroIcons";
const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const isAuth = false;
  return (
    <React.Fragment>
      <div className="w-full h-12 bg-gray-800 flex justify-between item-center px-5">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="flex gap-3 items-center text-white">
          <Link
            to="/"
            className="hover:text-orange-600"
            data-tooltip-target="tooltip-default"
          >
            <HomeIcon />
          </Link>
          <Link
            to="/cart"
            className="hover:text-orange-600 cart-button"
            data-cart-length={cart.length}
          >
            <CartIcon />
          </Link>

          <Link to="/admin/dashboard" className="hover:text-orange-600">
            <ChartBarIcon />
          </Link>
          <div className="flex gap-3 items-center ml-5">
            {!isAuth ? (
              <div>
                <Button
                  className="px-3 py-1 rounded-md bg-teal-500 hover:bg-teal-700"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </Button>
                <Button
                  className="px-3 py-1 rounded-md ml-2 bg-teal-500 hover:bg-teal-700"
                  onClick={() => navigate("/auth/signUp")}
                >
                  Sign Up
                </Button>
              </div>
            ) : (
              <div>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
