import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/database.js';
import 'dotenv/config'
import ownerRoutes from './routes/ownerRouter.js';
import userRoutes from './routes/userRouter.js';
import productRoutes from './routes/productRouter.js';
const app = express();

await connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/owners",ownerRoutes);
app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use((req,res,next)=>{
    res.status(400).json({message:'Page Not Found'});
    res.end();
})
app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})