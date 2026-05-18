// this loop  for array and object 
// foreach loop never return value it work like void function
//array is itreble
//forof loop give direct value of array it not give index number

let arr=[1,2,3,5,4]

for (const element of arr) {
//    console.log(element);
    
}

//it work on sring

let msg="Divyesh"
for (const val of msg) {
//    console.log(val);
    
}



//maps  it remove duplicate element  yaa it is object
let map=new Map()
map.set('IN',"India")
map.set('USA',"united states of America")
map.set('FR',"France")
map.set('IN',"india")
map.set('IN',"india")

//console.log(map);

for (const [key,val] of map) { // inside [] is destructurer
  //  console.log(key,val);
    
}

let obj={
    name:"Divyesh",
    age:18
}
// for (const [key,val] of obj) { 
//     console.log(key,val); //TypeError: obj is not iterable
    
// }

// so we use forin\

//forin for map


for (const key in obj) {
  //  console.log(obj[key]);
}

// now forin use for array

let newarr=["js","java","python","ruby"]

for (const key in newarr) {
//console.log(newarr[key]); // in forin  loop not directe value give it give index number
   
    
}



//for each loop

const codding=["js","java","python","cpp"]


//it work
//  codding.foreach(function (){
//  logic
//})


function getvalue(val){
   // console.log(val);
    
}
//it work 
codding.forEach(getvalue)


// it work
codding.forEach((val)=>{
 //   console.log(val);
    
})

// now create object of array
let arobj=[
    {
        language:"java",
        languagefile:".java"
    },
    {
        language:"javascript",
        languagefile:".js"
    },
    {
        language:"python",
        languagefile:".py"
    },
    {
        language:"c++",
        languagefile:".cpp"
    }
]

console.log(arobj[0].language); // easy 

arobj.forEach((item)=>{
    console.log(item.language);
    
})

for (const key in map) {
    console.log("it is map ",key,"map");
    
    
} 