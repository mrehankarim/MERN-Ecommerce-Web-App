import { ApiError } from "../utils/apiError.js";
import { Admin } from "../modes/admin.model.js";
import asynHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import {Product} from "../modes/product.model.js";
const generateAccessAndrefreshToken=(admin)=>{
    const accessToken=admin.generateAccessToken()
    const refreshToken=admin.generateRefreshToken()
    if(!accessToken || !refreshToken){
        throw new ApiError(500,"Failed to generate access and refresh token")
    }
    return {accessToken,refreshToken}
}

const loginAdmin=asynHandler(async(req,res)=>{
    const {email,password}=req.body
    const admin=await Admin.findOne({email})
    if(!admin){
        throw new ApiError(401,"Invalid email or password")
    }
    if(!await admin.isPasswordCorrect(password)){
        throw new ApiError(401,"Invalid email or password")
    }
    const {accessToken,refreshToken}=generateAccessAndrefreshToken(admin)
    const options={
        httpOnly:true,
        secure:true
    }
    const loggedInAdmin=await Admin.findById(admin._id).select("-password -refreshToken")
    res.cookie("accessToken",accessToken,options)
    res.cookie("refreshToken",refreshToken,options)
    res.status(200).json(new apiResponse(200,"Admin logged in successfully"))
})

const logoutAdmin=asynHandler(async(req,res)=>{
    const admin=req.admin
    admin.refreshToken=null
    await admin.save()
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    res.status(200).json(new apiResponse(200,"Admin logged out successfully"))
})

const refreshTokenHandler = asynHandler(async(req,res)=>{
    const {refreshToken} = req.cookies
    if(!refreshToken){
        throw new ApiError(401,"Please login to access this page")
    }
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    const admin = await Admin.findById(decoded.id)
    if(!admin){
        throw new ApiError(401,"Please login to access this page")
    }
    const {accessToken, refreshToken: newRefreshToken} = generateAccessAndrefreshToken(admin)
    res.cookie("accessToken",accessToken,options)
    res.cookie("refreshToken",newRefreshToken,options)
    res.status(200).json(new apiResponse(200,"Token refreshed successfully"))
})

const getAllProducts=asynHandler(async(req,res)=>{
    const products=await Product.find()
    res.status(200).json(new apiResponse(200,"All products fetched successfully",products))
})

const deleteProduct=asynHandler(async(req,res)=>{
    const {id}=req.params
    const product=await Product.findByIdAndDelete(id)
    if(!product)
    {
    throw new ApiError(404,"Product not found")
    }
    res.status(200).json(new apiResponse(200,"Product deleted successfully",product))
})

export {loginAdmin,logoutAdmin,refreshTokenHandler,getAllProducts,deleteProduct}