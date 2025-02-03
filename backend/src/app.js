import express from "express"
import cors from "cors"

const app=express()


app.use(cors())
app.use(express.static("public"))
app.use(express.urlencoded({limit:"16kb"}))
app.use(express.json({limit:"16kb"}))

import productRouter from "../src/routes/product.routes.js"

app.use("/api/v1",productRouter)

app.get("/",(req,res)=>{

    res.send("Hi This backend is built by Muhammad Rehan")

})

export default app;