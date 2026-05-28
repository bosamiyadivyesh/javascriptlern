// fetch("https://api.github.com/users/bosamiyadivyesh")
// .then((res)=>(res.json()))
// .then((ress=>console.log(ress)
// ))

async function getdata() {
    try{
        let data=await fetch("https://api.github.com/users/bosamiyadivyesh")
        let result=await data.json()
        console.log(result);
        
    }
    catch{

    }
}

//getdata()



function wait(ms,msg){
    return new Promise((resolve)=>setTimeout(()=>{console.log(msg)
        resolve()},ms))
}

wait(1000,"hello").then(wait(1000,"second hello"))