const productController={
    async fetchProducts(req,res,next){
        try {
            const response=await fetch("https://dummyjson.com/products");
            const data=await response.json();
           res.status(200).json(data);
        } catch (error) {
            res.status(500).json({message:"Internal server Error"})
        }
    },
    async fetchProductById(req,res,next){
        try {
            const {id}=req.params;
            const response=await fetch(`https://dummyjson.com/products/${id}`);
            const data=await response.json();
           res.status(200).json({products:data});
        } catch (error) {
            res.status(500).json({message:"Internal server Error"})
        }
    }
}
module.exports=productController