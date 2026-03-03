const readline=require("readline");
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("hi",function(name){
    console.log(`your name is ${name}`)
    rl.close();
})