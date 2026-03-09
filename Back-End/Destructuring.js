const address = {
    name: "kish",
    age: 19,
    id: 1,
    address: {
        city: "chennai",
        street: "No1"
    }
}

//destructing------------------------------------

const { name: username, age, id, address: { city, street } } = address;

// console.log("name ",username)
// console.log(address)
// console.log(city)


const array = [1, 2, 3]
// console.log(array)
// const [...elements]=array;
// const [first,second,third]=array;

//rest operator ==>must be in left side and end of the list---------------------------------
const [first, ...elements] = array;
// console.log(first ,elements)

// console.log(elements)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//spread operator ==> right side---------------------------------------------
const merged = [...arr1, ...arr2]
// console.log(merged);

const ob1 = { a: 1, b: 2 };
const ob2 = { c: 3, d: 4 };
// const ob3={e:5,f:6}
const ob3 = { d: 5, e: 6 }
const combined = { ...ob1, ...ob2, ...ob3 } //overrides the element
// console.log(combined);


let str = "hekljsajkhajksna";
str = [...str]
// console.log(str);

function sum(a, b, c) {
    return a + b + c;
}

let numbers = [8, 6, 5]
console.log(sum(...numbers)); // giving parametres is spread----------------

const arrvalue = [1, 2, 3, 44, 32, 8, 2, 3, 22, 0, 1];

function num(...nums) { //recieving arguments is rest-------------------
    let res = nums.map(m => m * 5)
    console.log(res)
}

let numbersss = [1, 3, 21, 2, 3, 3, 32, 12, 3]
num(...numbersss)//spread--------------




