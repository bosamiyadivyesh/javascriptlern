console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const uder = {
  name: "Divyesh",
  age: 18,
  isavalible: true,
  greet(){
    console.log(this.name);
    
  }

};

console.log(Object.getOwnPropertyDescriptor(uder, "name"));
Object.defineProperty(uder, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});


for (const [key, value] of Object.entries(uder)) {
 if(typeof value !== 'function'){
    console.log(`${key}-${value}`);
 }
    
}


// innthis code is best for depth in js 