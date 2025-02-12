import {Product} from "../modes/product.model.js";
import asynHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js";
import fileUploader from "../utils/cloudinary.js"
const FetchProductByCategory=asynHandler(async (req,res)=>{

    const {category}=req.query

    if(!category)
    {
        throw new apiError(400,"category is required")
    }

    const products=await Product.find({product_category:category})

    if(!products)
    {
        throw new apiError(500,"Something went wrong while fetching product")   
    }

    res.status(200).json(new apiResponse(200,{
        products:products
    },"Product fetched Sucessfully"))
})


const PostProduct=asynHandler(async (req,res)=>{

    const {title,description,price,category}=req.body

    if([title,description,price,category].some((field)=>field==""))
    {
        throw new apiError(400,"All fields are required")
    }
    console.log(req.file)
    const localFilePath=req.file?.path

    if(!localFilePath)
    {
        throw new apiError(400,"File is required")
    }

    const productImage=await fileUploader(localFilePath)

    if(!productImage)
    {
        throw new apiError(500,"Something went wrong while uploading file to cloudinary")
    }

    const product=await Product.create({
        product_name:title,
        product_desc:description,
        product_Image:productImage?.url,
        product_price:price,
        product_category:category

    })
    if(!product)
    {
        throw new apiError(500,"Something went wrong while saving product to database")
    }
    res.status(200).json(
        new apiResponse(200,
            {
                product
            },
            "Product created successfully"
        )
    )
})

export {FetchProductByCategory,PostProduct}