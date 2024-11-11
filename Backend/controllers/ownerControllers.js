import Owner from '../models/ownerModel.js';
import product from '../models/productModel.js';
const createOwner = async (req,res)=>{
    try{
        let owners = await Owner.find();
        if(owners.length>0) return res.status(503).json({msg:"You don't have permission to create a new owner"})
        
        let {fullname,email,password} = req.body;

        let createdOwner = await Owner.create({
            fullname,
            email,
            password,
        });

        res.status(201).json(createdOwner);
    }
    catch(error)
    {
        res.status(503).json({msg:"You don't have permission to create a new owner"})
    }
}

const loginOwner = async(req,res)=>{
    try{
        let {email,password} = req.body;
        const user = await Owner.findOne({email,password});
        if(user){
            res.status(200).json({
                _id:user._id,
                fullname:user.name,
                email: user.email,
            });
        } else {
            res.status(401).json({message:'Invalid email or password'});
        }
    }
    catch(err)
    {
        res.status(401).json({message:err.message});
    }
}

const createProduct = async (req,res)=>{
    try{
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
        
        const newProduct = await product.create({
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
            image: req.file.buffer,
        });
        
        res.status(201).json(newProduct);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {createOwner, loginOwner,createProduct};