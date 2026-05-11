let obj1=new Object()
obj1.name="Divyesh"

console.log(obj1);

let obj2={
    fname:"Divyesh",
    lname:"Bosamiya",
    age:18,
    course:"btech",
    fullname:function(fname,lname){
        console.log(fname , lname)
    }
}

console.log(obj2.fullname)

//Object.freeze(obj2)  use to lock value
obj2.fname="Naykav"

// console.log(obj2);
// console.log(Object.keys(obj2));   give all keys in array formate
// console.log(Object.values(obj2));  give aell value of object in array 
// console.log(Object.entries(obj2));  give key value pair 



