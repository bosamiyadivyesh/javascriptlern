//date functions

const date=new Date()
console.log(date)
console.log(typeof date)
// date.toLocaleString('default',{
//     weekday:"long"
// })
// console.log(date) i dont now only this

//functions  of dates

// console.log(`Local String : ${date.toLocaleDateString()}`)
// console.log(`DATE STRING : ${date.toDateString()}`)
// console.log(`DATE TO ISO : ${date.toISOString()}`)
// console.log(`DATE TO STRING : ${date.toString()}`)
// console.log(`DATE JSON : ${date.toJSON()}`)
// console.log(`TO GETDATE : ${date.getDate()}`)
// console.log(`TO GET DAY : ${date.getDay()}`)
// console.log(`TO GET FULLYEAR : ${date.getFullYear()}`)
// console.log(`TO GET MINUTES : ${date.getMinutes()}`)
// console.log(`TO GET MONTH : ${date.getMonth()}`)


//time and function

const time=Date.now()
console.log(time)
console.log(typeof time)


//functions of time

console.log(time/1000)
console.log(time.toExponential())
