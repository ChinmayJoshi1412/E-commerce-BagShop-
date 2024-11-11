import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        default:[]
    }],
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:Number
    }
});

const User = mongoose.model('user',userSchema);

export default User;