function setdata(name, age) {
  this.name = name;
  this.age = age;

  this.greeting = function () {
    console.log(`wlcome ${this.name}`);
    return this.name;
  };
  this.greeting(); // hear call so it print name in console and return name but return value not cath(name)

  
}

let userone = new setdata("divyesh", 18); // it worlk similar as class new object userone create and now can access all function property like name,age
let usertwo = new setdata("Naykav", 20);

//console.log(userone.greeting());
