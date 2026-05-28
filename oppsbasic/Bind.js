// let user={
//     name:"Divyesh"
// }
// function greet(){
//   console.log(`${this.name}`);
  
// }

// greet.bind(user)()

const user = {
  name: "Divyesh",

  greet() {
    console.log(this.name);
  }
};

setTimeout(user.greet.bind(user), 1000);


// in js method can not read direct property of object in side  method so sollution is bind it can give refrence