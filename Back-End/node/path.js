const path=require("path");
// console.log(path)
// console.log(__dirname)
// console.log(__filename)
// let pathinfo=path.parse(__filename);
// console.log(pathinfo);
// pathinfo=path.parse(__dirname);
// console.log(pathinfo);

let pathjoin=path.join(__filename,"hello.js")
// console.log(pathjoin);

pathjoin=path.basename(__filename)
// console.log(pathjoin);

pathjoin=path.extname(__filename);
// console.log(pathjoin);

console.log(pathjoin=path.resolve("path.js"));









