const Product = require("../models/Product");

const productController = {
    async getAllProducts(req, res, next) {
        try {
            const products = await Product.find();
            res.status(200).json({ products });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Internal server Error" })
        }
    },
    async getProductById(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            res.status(200).json({ product });
        } catch (error) {
            res.status(500).json({ message: "Internal server Error" })
        }
    },
    async getCategories(req, res, next) {
        try{
            const products=await Product.find();
            const categories=await products.map(product=>product.category);
            const unique=[...new Set(categories)];
            res.status(200).json({ categories: unique });
        }catch(error){
            res.status(500).json({error})
        }
    },
    async addNewProduct(req, res, next) {
        try {
            const { title, description,price, rating, brand, category,configuration,mainImage, relatedImages } = req.body;
            const newProduct = new Product({
              title,
              description,
              price,
              rating,
              brand,
              category,
              configuration,
              relatedImages:relatedImages.map(e => e),
              mainImage
            });
            const product = await newProduct.save();
            res.status(200).json({ product });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error })
        }
    },
}
module.exports = productController