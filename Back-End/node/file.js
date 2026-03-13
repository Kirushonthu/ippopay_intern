const { log } = require("console");
const fs=require("fs");
// console.log(fs)

console.log(fs.readdirSync("./"))

let data=fs.readdir("./",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
        
    }
})

console.log(fs.readFileSync("file.js"));

    