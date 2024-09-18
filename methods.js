//^ DOM Methods ...............................

//& AppendChild  Method .......

// let p = document.querySelector("p")
// let p1 = document.createElement("button")
// p1.innerText="click me"
// p.appendChild(p1) //? It can take only one argument ....
// console.log(p1);

//& Append Method .........

// let div = document.querySelector("div")

// let ele = document.createElement("button")
// let ele1 = document.createElement("button")
// ele.innerText=("Click Me1"); 
// ele1.innerText=("Click Me2");
// div.append(ele,ele1) //? It can take one or multiple argument ....
// console.log(ele,ele1);

//& Prepend Method ....

// let div1 = document.querySelector("div")
// let btn1 = document.createElement("button")
// let btn2 = document.createElement("button")
// btn1.innerText="Submit1"
// btn2.innerText="Submit2"
// div1.prepend(btn1,btn2) //? It can take one or multiple argument ....
// console.log(btn1,btn2);

//& Before Method .....

// let div2 = document.querySelector("div")
// let btn3 = document.createElement("button")
// let btn4 = document.createElement("button")
// btn3.innerText="Log In 1"
// btn4.innerText="Log In 2"
// div2.before(btn3,btn4) //? It can take one or multiple argument ....
// console.log(btn3,btn4);

//& After Method .....

// let div3 = document.querySelector("div")
// let btn5 = document.createElement("button")
// let btn6 = document.createElement("button")
// btn5.innerText="Log Out 1"
// btn6.innerText="Log Out 2"
// div3.after(btn5,btn6) //? It can take one or multiple argument ....
// console.log(btn5,btn6);

//! One More Syntax To Add Element  ...........

let newHeading = document.createElement("h1");
// newHeading.innerHtml = "<i>Himanshu Vishwakarma!</i>";
newHeading.innerText = "<i>Himanshu Vishwakarma!</i>";

document.querySelector("body").prepend(newHeading);
// console.log(newHeading.innerHtml);

let para = document.querySelector("p")
// para.remove() //? It is Use to Remove the element ...
