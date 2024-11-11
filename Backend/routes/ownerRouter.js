import express from 'express';
import { createOwner,loginOwner, createProduct } from '../controllers/ownerControllers.js';
import { upload } from '../config/multerConfig.js';
const ownerRoutes = express.Router();

ownerRoutes.post('/create',createOwner);
ownerRoutes.post('/login',loginOwner)
ownerRoutes.post('/createproduct',upload.single("image"),createProduct);



export default ownerRoutes;
