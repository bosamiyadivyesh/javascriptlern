// hear use all method in array

let  newarr=[1,2,3,4,5,6,7,8,9,10]

// let arrauvalue=newarr.forEach((val)=>{  // so forech not return
//     return val
// })

// console.log(arrauvalue);

let arrauvalue=newarr.filter( ( val ) => val > 4)
//console.log(arrauvalue);

let students = [
    {
        id: 1,
        name: "Divyesh",
        age: 20,
        city: "Rajkot",
        course: "BCA"
    },
    {
        id: 2,
        name: "Rahul",
        age: 21,
        city: "Ahmedabad",
        course: "B.Tech"
    },
    {
        id: 3,
        name: "Priya",
        age: 19,
        city: "Surat",
        course: "BCom"
    },
    {
        id: 4,
        name: "Aman",
        age: 22,
        city: "Vadodara",
        course: "MCA"
    },
    {
        id: 5,
        name: "Neha",
        age: 13,
        city: "Bhavnagar",
        course: "BSc"
    }
];

let validation=students.filter((data)=>{ return data.age>20})
console.log(validation);

let agecount=students.reduce((acc,item)=>(acc+item.age),0)
console.log(agecount);

//let agecount=students.reduce((acc,item)=>acc+item.age,0)
//console.log(agecount);
//done

let mapmeth=students.map((item)=>item.age=2000)
console.log(mapmeth);
console.log(students);



/* filter use for condition map use for acess all element and reduce use sum of all element mean arithmetic ortaion for all element then use reduce */
