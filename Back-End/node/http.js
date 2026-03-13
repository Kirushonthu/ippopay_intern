const http=require("http")
// console.log(http);
const Server=http.createServer((req,res)=>{
res.write("first server!")
res.end()
})

Server.listen(3047,()=>{
    console.log("Server start listening on port 3047!");
    
})