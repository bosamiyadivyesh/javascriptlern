function render(element,container){
let newelement=document.createElement(element.type)
newelement.setAttribute("href",element.prop.href)
newelement.innerHTML=element.children
container.appendChild(newelement)

}
let element={
    type:'a',
    prop:{
        href:"https://www.google.com"
    },
    children:"ClikMe"

}

let contaner=document.getElementById("root")
render(element,contaner)