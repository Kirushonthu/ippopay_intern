// // let a=10;
// // let b=a;
// // b=1000;
// // console.log(a);//primitive type cant be changed

// // let user1={name:"kish",age:10} //refrence type


// // let user2={...user1}; //use pread operator to prevent refrence types
// // user2.name="kirsh"
// // console.log(user1)

// // let user3=user1;
// // user3.name="swash" // this can be change the heap memory
// // console.log(user1)


// // function wait(){
// //    for(let i=0;i<10000000000;i++){} //syncronous function executed by line by line wait for the code to be executed
// //     console.log("2")
// // }
// // console.log("1")
// // wait()
// // console.log("3")
// // console.log("4")
// // console.log("5")


// // const waitasync=()=>{
// //     setTimeout(()=>{console.log("2")},5000)  //async function
// // }
// // console.log("1")
// // waitasync()
// // console.log("3")
// // console.log("4")
// // console.log("5")


// // callback

// function hi( callback){
//     setTimeout(()=> {console.log("hi"),callback()},3000)
// }

// function slep(callback){
//    setTimeout(()=>{console.log("iam sleeping"),callback()},3000)
// }

// function drink(){
//    setTimeout(()=> console.log("iam drinking"),3000)
// }
// hi(()=>{
//     slep(drink)
// })


// const eat=(callback)=>{
//     setTimeout(callback,3000)
// }

// eat(()=>  console.log("iam sleeping"))

// promises

const pr=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    const student={name:"kish",id:1,age:100}
    let status=true;
    status?resolve(student):reject(new Error("error happend!!!"))
   },3000)
})

pr
.then((response)=>console.log(response))
.catch((error)=>console.log(error.message))