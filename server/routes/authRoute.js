import express from 'express';
import { Signin, Signup } from '../controller/authController.js';

const router = express.Router();

router.post("/Signup" ,Signup);
router.post("/Signin" ,Signin);

export default router;