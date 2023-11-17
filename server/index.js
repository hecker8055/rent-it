import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
import dotenv from 'dotenv';
dotenv.config();



mongoose.connect("mongodb+srv://ranked2301:ranked@cluster0.29pyxlj.mongodb.net/Rent-it")
.then(() => {
  console.log('connected to mongoose');
})
.catch((err) =>{
  console.log(err);
});




const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err,req,res,next)=>{
  const statusCode =err.statusCode || 500;
  const message = err.message || 'internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
})
