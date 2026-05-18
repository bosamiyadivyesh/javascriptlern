
//simple function 
// function displayname(fristname,lastname){
//   console.log(`Hello ${fristname},${lastname}`)
// }
// displayname("Divyesh","Bosamiya")


//retuturn function
// function addition(num1,num2){
// return num1+num2

// }
// let result=addition(40,6)

// console.log(result)


//arrow function  2 types implicet and explicit
//implicet like automatic return and explicit means inside {} we use return keyword it call explicit
//implecit means () 
//now we can return object with out return keyword so  wecan write inside () so it will return

// let multiplication=(num1,num2)=>{
    // console.log(num1*num2);
    // 
// }
// 
// multiplication(1,47)

// let multiplication=(num1,num2)=>{
// return num1*num2
// }
// let rs=Number(multiplication(47,"2"))
// console.log(rs);

// let multiplication=(num1,num2)=>(num1*num2)    it work similar return if we not write return thwn we can 
// let rs=multiplication(1,7)                   we can write () inside ()this act as return
// console.log(rs)

let newtest=()=>{
    return{
        name:"Divyesh"   //if i return obj in explicit method
    }
}
console.log(newtest());
// ya it work 

let rtobj=()=>({name:"divy"})  // if i can return object in implicet method then i use ()
console.log(rtobj());






//function with array and object

// function hobby(hobby){
// console.log(hobby)
// }

// hobby(["sleep","eat"])


// function obj(obj1){
//     console.log(obj1)
// }

// obj({name:"Divyesh,age:18"})


//no we can create IIEF(immediately invoke function)

(function name(){
    console.log(`divyesh`);
})();


//with parameter
(function name(val){
    console.log(val)
})("Divyesh")