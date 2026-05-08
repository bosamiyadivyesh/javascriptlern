const name="Divyesh"
const age=18

console.log(name+" "+age)

console.log(`hello my name is ${name} and my age is ${age}`)//using templatestring 

const getname=new String("Divyesh")//use oop method
console.log(getname)

console.log(getname.length)//give length
console.log(getname.toUpperCase())//convert in to upper string
console.log(getname.charAt(2))//it give word of specific string in specif index
console.log(getname.indexOf("y"))//it give word index number in specific string 
console.log(getname.substring(0,4))//it give specific word in string
console.log(getname.slice(-7)) //use break strings and make new string

const newtext=new String("   MY PLAIN TEXT    ")
console.log(newtext)
console.log(newtext.trim())

const url="http://divyesh%20Bosamiya.com"
console.log(url)
console.log(url.replace("%20","-"))


const data="my-name-is-divyesh"
console.log(data)
console.log(`this use to check specific word in this string or not : ${data.includes('divyesh')}`)
console.log(`it use break-word and make array : ${data.split("-")}`)


