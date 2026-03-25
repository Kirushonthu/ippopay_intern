const express=require("express")
const app=express();

// app.use(logger)

app.get(["/home" , "/"],logger,(req,res)=>{
     res.send("home page")
})

app.get("/about",auth,(req,res)=>{
    res.send("about Page")
    console.log("about");
    
})

function logger(req,res,next){
    console.log("request passsed");
    next()
}

function auth(req,res,next){
    console.log("Auth Sucessfull");
    next()
}

const PORT=process.env.PORT || 3012;

app.listen(PORT,()=>{
    console.log(`Server running at Port ${PORT}`)
})