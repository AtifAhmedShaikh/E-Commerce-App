const mongoose=require("mongoose");
const {Schema}=mongoose;

const productSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    configuration:{
        type:Schema.Types.Mixed
    },
    relatedImages:[{type:String}],
    mainImage:{
        type:String,
        required:true
    }
},
{timestamps:true}
);
const Product=mongoose.model("product",productSchema);
module.exports=Product;