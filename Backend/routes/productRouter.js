import express from 'express';
import { protect } from '../utils/protect';
import { getAllProducts, addToCart, showCart } from '../controllers/productControllers';
const productRoutes = express.Router();

productRoutes.get('/allproducts',getAllProducts)

productRoutes.put('/addtocart/:productid',protect,addToCart);

productRoutes.get('/getcart',protect,showCart);

export default productRoutes;
