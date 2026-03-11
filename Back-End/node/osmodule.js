// const { log } = require("console")
const os=require("os")

const osfun=()=>{
       
if(os.platform()==="win32"){
    console.log("hello window user!");   
}

else if(os.platform()==="darwin"){
    console.log("hello mac User");    
}
else{
    console.log("Hello User!");
}
}
// osfun()

console.log(os.platform());
console.log(os.arch())

console.log(os.totalmem());
console.log(os.freemem());

console.log(os.uptime())
console.log(os.hostname())

console.log(os.cpus())