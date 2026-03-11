const { add, sub, mul, div } = require("./export")

// const {add,sub,mul,div} =expvals

// const ad=expvals.add(2,3)
// const su=expvals.sub(2,3)
// const mu=expvals.mul(3,4)
// const di=expvals.div(10,3)

// const { adds, subs, muls, divs } = require("./export")

// const ad = adds(2, 3)
// const su = subs(2, 3)
// const mu = muls(3, 4)
// const di = divs(10, 3)

const ad = add(2, 3)
const su = sub(2, 3)
const mu = mul(3, 4)
const di = div(10, 3)

console.log(ad)
console.log(su);
console.log(mu)
console.log(di)

