import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs';
import { errorhandler } from '../utils/error.js';

export const Signup =  async (req,res,next) =>{
    const { username,email,password} =req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username,email,password: hashedPassword});

    try{
        await newUser.save();
    res.status(201).json('user created');

    } catch (error){
        next(error);
    }
    



}