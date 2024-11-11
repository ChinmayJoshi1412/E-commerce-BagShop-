import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:Buffer,
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:{
        type:String,
        required:true
    },
    panelcolor:{
        type:String,
        required:true
    },
    textcolor:{
        type:String,
        required:true
    },
})

const product = mongoose.model("product",productSchema);

export default product;