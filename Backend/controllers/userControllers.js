import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import generatetoken from '../utils/generateToken.js';

const registerUser = async (req,res)=>{
    
    try{
        let {fullname, email, password} = req.body;

        let checkuser = await User.find({email});

        if(checkuser.length>0){
            res.status(400).json({message:"User with this email already exists"});
        }
        else{
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt,async (err,hash)=>{
                    if(err)
                    {
                        return res.status(500).send(err.message);
                    }
                    else
                    {                        
                        let newUser = await User.create({
                            fullname,
                            email,
                            password: hash
                        });

                        generatetoken(res,newUser._id);

                        res.status(201).json({
                            _id:newUser._id,
                            fullname:newUser.fullname,
                            email:newUser.email
                        });
                    }
                });
            })
        }
    }
    catch(error)
    {
        res.status(400).json({message:e.message})
    }
    
}

const loginUser = async (req,res)=>{
    try{
        let {email,password} = req.body;
        const user = await User.findOne({email});
        let checkpass = await bcrypt.compare(password,user.password);
        if(user && checkpass){
            generatetoken(res,user._id)
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email: user.email,
                cart: user.cart,
                orders: user.orders,
                contact: user.contact,
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

const logoutUser = async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.status(200).json({message:'User loggedout'});
}

export {registerUser,loginUser,logoutUser}