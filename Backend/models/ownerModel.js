import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
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
    products:{
        type:Array,
        default:[]
    },
    gstin:{
        type:String,
    }
});


const Owner = mongoose.model("owner",ownerSchema);

export default Owner;