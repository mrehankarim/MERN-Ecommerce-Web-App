import { Admin } from "../modes/admin.model.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken"

export const isAuthenticated=asyncHandler(async(req,res,next)=>{
    const {token}=req.cookies
    if(!token)
    {
        throw new ApiError(401,"Please login to access this page")
    }
    const decoded=jwt.verify(token,process.env.ACSESS_TOKEN_SECRET)
    req.admin=await Admin.findById(decoded.id)
    if(!req.admin)
        {
        throw new ApiError(401,"Please login to access this page")
        }
    next()
})

export default isAuthenticated