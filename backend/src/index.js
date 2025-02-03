import app from "./app.js";
import connectDB from "./db/db.js";

import dotenv from "dotenv"

dotenv.config({})
connectDB().then(()=>{

    app.on("error",(err)=>{
        console.error("Server Error:", err);
        });

        const PORT=process.env.PORT || 5000

        app.listen(PORT,()=>{
            console.log(`Server running on Port ${PORT} locahost`)
        })
    }).catch((error)=>{
        console.log("Database connection failed!",error)
        process.exit(1)
    })

    