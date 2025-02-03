import asynHandler from "../utils/asyncHandler.js";
import { DB_NAME } from "../constants.js";
import mongoose from "mongoose"
const connectDB=async ()=>{

    try {
        const dbInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log('Database connected!! Host',dbInstance.connection.host)
        
    } catch (error) {
        console.log("DB connection failed",error)
        process.exit(1)
        
    }
}

export default connectDB