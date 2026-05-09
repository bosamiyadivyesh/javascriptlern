//methode  of declaration array

const myarray=[1,2,3,4,5,6]
const newarray=new Array(44,45,46,47,48,49,50)



// console.log(typeof myarray); both same output:object
// console.log(typeof newarray);

//methods of array
myarray.push(7)  //[    1, 2, 3, 4, 5, 6, 7]  and push can accept any data like object other array and it make complax so plese remamber 
myarray.pop()  //[    1, 2, 3, 4, 5, 6]

// myarray.shift() //remove frist values 
// myarray.unshift(1) //it remove lastelement add new element in frist index
// myarray.unshift(1) 


const slicemethod=myarray.slice(1,3) //slice method dose mot affact the original array it not manpulation orignal data range-1
// console.log(`ORIGINAL : ${myarray}`);
// console.log(slicemethod);


const splicemethod=newarray.splice(2,2)
// console.log(`ORIGNIAL : ${newarray}`); //it affect the original data it manipulate the array data range=
// console.log(splicemethod);

// part 2 

//to problem of push element so solution is concat methode but in concate method we can join two array so we need therd varialble wich can sstpre concat arrain one array'

const concatemethod=myarray.concat(newarray)
console.log(concatemethod) // so it easy 

//now new method using sprade oprator spred means alag karna [1,2,3] spred =1    2     3
const spredmethod=[...myarray,...newarray]
console.log(spredmethod);


// now we use flat method for multiple array in dingle array

const multiplearray=[1,2,3,[4,5],6,7,[7,9,0,[3,2,4,5]]]
const flatmethoduse=multiplearray.flat(Infinity) // in flat method they give ine parameter call defth means how many arra un side array i give infinity for study
console.log(`join multiple array and make singal array : ${flatmethoduse}`)
console.log(flatmethoduse);



//to convert and check array 
const fristname="DIVYESH"
const lastname="BOSAMIYA"
console.log(Array.from("Divyesh")) //  to make array from given value i give string in from methode parameter
console.log(Array.isArray("Divyesh"))//check is array or not
console.log(Array.of(fristname,lastname));//join two or more  values  and make array
console.log(Array.of(fristname,lastname.newarray));//exception

