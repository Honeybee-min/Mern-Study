import express from "express";
import 'express-async-errors';
import * as authController from '../controller/auth.js';
const router = express.Router();

/**
   
 /auth/me       get
 */

 // POST /auth/signup 
 router.post('/signup',authController.createAuth);

 // POST /auth/login
router.post('/login',authController.loginAuth);

 // ??
 export default router;
