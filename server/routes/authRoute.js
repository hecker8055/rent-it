import express from 'express';
import { Signup } from '../controller/authController.js';

const router = express.Router();

router.post("/Signup" ,Signup);

export default router;