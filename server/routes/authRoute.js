import express from 'express';
import { google,Signin, signOut, Signup } from '../controller/authController.js';

const router = express.Router();

router.post("/Signup" ,Signup);
router.post("/Signin" ,Signin);
router.post('/google', google)
router.get('/signout',signOut )

export default router;