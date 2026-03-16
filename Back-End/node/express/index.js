const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());

let users = ["kish", "swash", "nobara", "rocket", "Zolo"]

app.get("/", (req, res) => {
    res.send("home page request!")
})

app.get("/users", (req, res) => {
    res.send(users);
})

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);

    res.send("user id: " + req.params.id)
})

// app.get("/users/",(req,res)=>{
// res.send(req.query.name)
// res.send(req.query.age);
//        res.send(req.query);

// })
// app.post("/users",(req,res)=>{
//     const data=req.body.name;
//     users.push(data);
//     res.send("user recieved")
// })

app.post("/users", (req, res) => {
    const data = req.body.name;
    users.push(data);

    res.json({
        message: "user received",
        users: users
    })
})

app.delete("/users", (req, res) => {
    const data = req.body.name;
    let index = users.findIndex(f => f === data);

    if (index !== -1) {
        users.splice(index, 1)
        res.json({
            message: "user Deleted",
            users: users
        })
    }
    else {
        res.status(404).json({
            message: "User not found!"
        })
    }
})

// app.get("/about",(req,res)=>{
//      res.send("This is about page!")
// })

// app.get("/services",(req,res)=>{
//     res.send("This is service page")
// })

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is listening on port 3001");

})
