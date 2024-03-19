import express from "express"
import cors from"cors"
import "dotenv/config"
import mongoose from "mongoose";
import productRoutes from "./routes/product.js"

const app = express();

/////MongoDB connection 
mongoose.connect(process.env.MONGODB_URL_STRING).then(()=> console.log("DB CONNECTED SUCCESSFULLY"))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes
app.use("/api/v1/products", productRoutes)


const port = process.env.PORT || 7000
app.listen(port , ()=>{
    console.log(`server started on ${port} `)
})