// now we create object prototype

function CourseDetail(name, price) {
  this.name = name;
  this.price = price;
}

CourseDetail.prototype.incress = function () {
  this.price++;
  return "Ok";
};

let Courseone = new CourseDetail("DM", 1000);
console.log(CourseDetail.prototype); // it show only this things wich we create usig prototype keyword
//{ incress: [Function (anonymous)] }

console.log(`Befor CursePrice : ${Courseone.name},${Courseone.price}`);
// Befor CursePrice : DM,1000

console.log(Courseone.incress());
//OK

console.log(
  `After CoursePrice Call incressmethod : ${Courseone.name},${Courseone.price}`,
);
// After CoursePrice Call incressmethod : DM,1001

//in javascript evrithing is a object so protype method work all

// check in object
let heros = ["thor", "spyderman"];
let SupperHero = {
  name: "ironman",
  age: 18,
};

Object.prototype.grat = function () {
  // plese use object keyword otherwise throw error
  console.log("grat exist in evry oibject");
};

heros.grat(); //this method working in arra beacuse in js evrything is object so it work

//object is parent of all function,array,string
//so we can add new method or some variable so it automaticly access by function,array,string
//but we can define a paritvular array so it not acces by object

Array.prototype.heydivyesh = function () {
  console.log(
    "this method work only array not in any types like object function string",
  );
};

heros.heydivyesh();
//this method work only array not in any types like object function string

// SupperHero.heydivyesh() throw error


//inheritance in prototype

let student={
    name:"divyesh",
    age:18,
    course:"btech"
}

let teacher={
    //__proto__:student //(inheritance it woek inside and outside of object) 

}
//teacher.__proto__=student  // it works 

// now one another method 
Object.setPrototypeOf(teacher,student) //it works


console.log(teacher.name); 
//divyesh
