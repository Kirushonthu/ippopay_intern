const express=require("express")
const cors = require("cors")

const app=express();

app.use(cors())
app.use(express.json());

let users=["kish","swash","nobara"]

app.get("/",(req,res)=>{
     res.send("home page request!")
})

app.get("/users",(req,res)=>{
    res.send(users);
})

// app.post("/users",(req,res)=>{
//     const data=req.body.name;
//     users.push(data);
//     res.send("user recieved")
// })

app.post("/users",(req,res)=>{
    const data = req.body.name;
    users.push(data);

    res.json({
        message: "user received",
        users: users
    })
})

// app.get("/about",(req,res)=>{
//      res.send("This is about page!")
// })

// app.get("/services",(req,res)=>{
//     res.send("This is service page")
// })

const PORT=3001;
app.listen(PORT,()=>{
    console.log("Server is listening on port 3001");
    
})
