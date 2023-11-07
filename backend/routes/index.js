const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();
//Request for home page of App
router.get("/", (req, res) => {
  res.json({ message: "Welcome E-commerce App !" });
});
//Post Request for user register
router.get("/api/products", productController.getAllProducts);
//Request one specific product by ID
router.get("/api/products/:id", productController.getProductById);
//Request for create or add new product in database
router.post("/api/addProduct", productController.addNewProduct)
//Request for Get all products categories
router.get("/api/categories",productController.getCategories);
module.exports = router;
