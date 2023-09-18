const mongoose=require("mongoose")
require("dotenv").config()

const connectDB=(app)=>{
mongoose.connect("mongodb+srv://user:user442917@cluster0.yvt4kou.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(4000,()=>{
   console.log(`db connected server is running or port ${process.env.PORT}`)
    })
})
.catch((err)=>{console.log(err)})
}

module.exports=connectDB