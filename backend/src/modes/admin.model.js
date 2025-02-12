import mongoose,{Schema} from "mongoose";


const adminSchema=new Schema({
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },  
})

adminSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
    next()
})
adminSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
adminSchema.methods.generateAccessToken=function(){
    return jwt.sign({id:this._id},process.env.ACSESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}
adminSchema.methods.generateRefreshToken=function(){
    return jwt.sign({id:this._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}
export const Admin=mongoose.model("Admin",adminSchema)