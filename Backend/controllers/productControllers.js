import product from "../models/productModel";
import User from "../models/userModel";

const getAllProducts = async(req,res)=>{
    try{
        let products = await product.find();
        res.status(200).json(products);
    }
    catch(err)
    {
        res.status(400).json({message:"Unable to fetch products"});
    }
}

const addToCart = async(req,res)=>{
    try{    
        let userfound = await User.findOne(req.user.email);
        userfound.cart.push(req.params.productid);
        res.status(200).json({message:"Added to card"});
    } catch (err) {
        res.status(400).json({message:"Unable to add to cart"});
    }
    
}


const showCart = async(req,res)=>{
    try {
        let userfound = await User.findOne(req.user.email).populate("cart");
        res.status(200).json(userfound);
    } catch (err) {
        res.status(400).json({message:"Unable to fetch cart"});
    }
}

export {getAllProducts,addToCart,showCart};