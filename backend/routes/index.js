const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome E-commerce App !" });
});

router.get("/api/products",productController.fetchProducts);
router.get("/api/products/:id",productController.fetchProductById);



module.exports = router;
