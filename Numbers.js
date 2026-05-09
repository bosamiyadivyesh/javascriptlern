const age=18

const random=new Number(100)

console.log(age)
console.log(random)

const constr=age.toString() //constr=convertostring number to string
console.log(`number to string: ${constr}`)

const tryfix=100.890008
console.log(tryfix.toFixed(2)) // it specified  after(.) digit means 100.89 (89) is after . two digit


const trypre=89.99032
console.log(trypre.toPrecision(1))  //simlilar pf round of
console.log(trypre.toPrecision(2))
console.log(trypre.toPrecision(3))
console.log(trypre.toPrecision(4))


const balance=1000000
console.log(balance.toLocaleString())


