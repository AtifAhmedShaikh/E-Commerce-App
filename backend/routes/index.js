const express = require("express");
const productController = require("../controller/productController");
const authController = require("../controller/auth");
const { hashedPassword, comparePassword } = require("../utils");
const User = require("../models/User");
const Product = require("../models/Product");
const router = express.Router();
//Request for home page of App
router.get("/", (req, res) => {
  res.json({ message: "Welcome E-commerce App !" });
});
//Request for user register
router.get("/api/popularProducts", productController.getPopularProducts);
// Request for user register
router.get("/api/products", productController.getAllProducts);
//Get the all users
router.get("/api/users", authController.getUsers);
//Request one specific product by ID
router.get("/api/products/:id", productController.getProductById);
//Request for create or add new product in database
router.post("/api/addProduct", productController.addNewProduct);
//Request for Get all products categories
router.get("/api/categories",productController.getCategories);
//Request for user register ,signUp, create account
router.post("/api/auth/register",authController.register);
//Request user Login
router.post("/api/auth/login",authController.login);


module.exports = router;