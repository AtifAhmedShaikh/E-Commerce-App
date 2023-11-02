const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mesage: "Welcome E-commerce App !" });
});


router.get("/api/products", (req, res) => {
  res.json({ products: [] });
});
router.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({ product: {}, id });
});
module.exports = router;
