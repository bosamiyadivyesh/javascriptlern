let obj1=new Object()
obj1.name="Divyesh"

//console.log(obj1);

let obj2={
    fname:"Divyesh",
    lname:"Bosamiya",
    age:18,
    course:"btech",
    fullname(fname,lname){
        console.log(this.fname , this.lname)
    }
}

let obj3={
    studentdetail:{
        studentid:101,
        studentname:"Divyesh",
        studentage:20,
        std:10,
        hobby:["Sleep","eat","dance"]
    },
    school:{
        syllbus:"full",
        subject:["Maths","English","Hindi","Gujrati","Sanskrit"]
    }
}
// console.log(obj2.fullname())
// 
// console.log(obj3.studentdetail) //show alll key vale paur inside studendetail object
// console.log(obj3.studentdetail.hobby)//show  hobby in side studentdeati yaa its array
// console.log(obj3.studentdetail.studentname)// show name 
// 



//Object.freeze(obj2)  use to lock value
obj2.fname="Naykav"

// console.log(obj2);
// console.log(Object.keys(obj2));   give all keys in array formate
// console.log(Object.values(obj2));  give aell value of object in array 
// console.log(Object.entries(obj2));  give key value pair 


// now can join both object using spard and asign method

let frist={
    studentid:101,
    name:"Divyesh",
    age:18,
    studyin:"collage"
}

let second={
    collagename:"marwadi",
    collagetime:"7 to 4",
    collagecourses:["btech","becom","bba","mba","mtech"] //collage course id define please
}

let reletion={
    studenid:101,
    collagecourses:"btech", //id define 
 }


 //now we can join both frist and second objects 

 const combineobject=Object.assign({},frist,second)
// combineobject.name="NAYKAV";
//  console.log(combineobject)   it dose not affacret orignal object
// console.log(frist.name)   

 //using spradmethod 

 const combinespred={...frist,...second}
//  combinespred.name="NAY kav bhai";
//  console.log(frist.name);  yaa it dose not effact original
//  console.log(combinespred)