const connectDB=require("./connectDB.js")
const mongoose=require("mongoose")
require("dotenv").config();
const cors=require("cors")

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

const data=require("./model.js")
const express =require("express")
const app=express()
app.use(cors(corsOptions));
connectDB(app)
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next();
})

app.get("/api",(req,res)=>{
data.find()
.then((result)=>{res.status(200).json(result)})
.catch((err)=>{res.status(404).json(err)})
})

    app.get("/add",(req,res)=>{
        const value=new data({
           title:"hello",
           dos:"hunnny",
           done:"buny",
           doing:"hdjdh",
        })
        value.save()
        .then((result)=>{res.status(200).json(result)})
        .catch((err)=>{res.status(404).json(err)})
        })


        
        app.post("/",(req,res)=>{
        const {title,dos,done,doing}=req.body
        const value=new data({
        title:title,
        dos:dos,done:done,doing:doing,
        })
        value.save()
        .then((result)=>{res.status(200).json(result)})
        .catch((err)=>{res.status(404).json({er:"please provide all details"})})
        })
        
        
        
 app.get("/api/add",(req,res)=>{
 const value=new data({
 title:"hello",
 dos:"hunnny",
 done:"buny",
 doing:"hdjdh",
 })
 value.save()
 .then((result)=>{res.status(200).json(result)})
 .catch((err)=>{res.status(404).json(err)})
  })
  
  app.post("/api",(req,res)=>{
  const {title,dos,done,doing}=req.body
  const value=new data({
  title:title,
  dos:dos,done:done,doing:doing,
  })
  value.save()
  .then((result)=>{res.status(200).json(result)})
  .catch((err)=>{res.status(404).json(err)})
  })
   app.get("/api/:id",(req,res)=>{
   const Id=req.params.id
   if(!mongoose.Types.ObjectId.isValid(Id)){
     return res.status(404).json({error:"Not found data"})
   }
   const Data=data.findById(Id)
   .then((result)=>{
     res.json(result) 
     console.log(result)
    })
   .catch((err)=>{res.json(err)})
   })
        
        
   app.delete("/api/:id",(req,res)=>{
     const id=req.params.id;
     if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({error:"Not found data"})
     }
     const Data=data.findOneAndDelete({_id:id})
     .then((result)=>{console.log(res.status(200).json(result))})
     .catch((err)=>{console.log(res.status(404).json(err.message))})
   })
        

             
   app.patch("/api/:id",(req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found data" });
  }
  
    data.findOneAndUpdate({ _id: id }, { ...req.body },{new:true})
    .then((r)=>{res.status(200).json(r) 
    console.log(r)
    })
    .catch((err)=>{res.status(404).json(err)})

});

        
        
        
        

app.delete("/:id",(req,res)=>{
       const Id=req.params.id
       const Data= data.findOneAndDelete(Id)
        .then((result)=>{res.status(200).json(result)})
       .catch((err)=>{res.status(200).json(err)})
  
    })


app.delete("/api/:id/:type",(req,res)=>{
        const Id=req.params.id
        const type=String(req.params.type)
        console.log(type)
        console.log(Id)
        const Data=data.findById({_id:Id})
        .then((result)=>{
         result.dos=undefined
         result.save()
         .then((r)=>{
           res.json(result)
           console.log(r)
         })
      .catch((err)=>{
        res.json(err)
        
      })
    })
   .catch((err)=>{res.json(err)})
        })
