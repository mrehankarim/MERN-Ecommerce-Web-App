import mongoose,{Schema} from "mongoose";

const productSchema=Schema({

    product_name:{
        type:String,
        required:true
    },
    product_desc:{
        type:String,
        required:true
    },
    product_Image:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_category:{
        type:String,
        enum:["chair","table","couch","nightstand","bed","cupboard"],
        required:true
    }
},
{
    timestamps: true
})


export  const Product=mongoose.model('Product',productSchema)