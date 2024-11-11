import express from 'express';
import {registerUser,loginUser,logoutUser} from '../controllers/userControllers.js'
import { protect } from '../utils/protect.js';

const userRoutes = express.Router();

userRoutes.post("/register",registerUser);
userRoutes.post("/login",loginUser)
userRoutes.post("/logout",protect,logoutUser)

export default userRoutes;
