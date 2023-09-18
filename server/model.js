const mongoose=require("mongoose")

const Schema=mongoose.Schema


const Data=new Schema({
    title:{
        type:String,
        required:true,
    },
    dos:{
        type:String,
        required:true,
    },
    done:{
        type:String,
        required:true,
    },
    doing:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports=mongoose.model("data",Data)