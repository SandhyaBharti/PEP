// DOM: Document Object Model, tree like structure to visulaize, but in reality it is a object and the name of the object is "document"
// document.getElementById("")           // single element => have to pass id name
// document.getElementsByClassName("")   // [array '[]' of element] => have to pass class name
// document.getElementsByTagName("")     // [array '[]' of element] => have to pass tag name
// document.querySelector("")            //single element (. -> className, # -> id)
// document.querySelectorAll("")         // [array '[]' of element] => accept all the selectors(id, class, tag, etc.)

const el = document.getElementsByClassName("container")
console.log(el[0].textContent);             // content of the div with spaces 
// console.log(el[0].innerHTML);               // all the tags of the div 
// console.log(el[0].innerText);               // only the text part of the div 
// change/update any value
// el[0].innerText = "Updated";
// el[0].innerHTML = "<button>Click ME</button>"
// add
el[0].append("hello")


// const ele = document.getElementById("message")
// console.log(ele);

const btn = document.createElement("button");
btn.innerText = "New button";
btn.classList.add("btn");           //classList: using for adding and removing
// btn.classList.remove("");

el[0].append(btn);
btn.style.backgroundColor = "blue";

//delete
const h1 = document.querySelector("#message")
el[0].removeChild(h1);


/*Event Listener: 
Event => any task, any operation known as event(onClick, mouse click)
Listener => A process that will listen our event
*/
btn.addEventListener("click", () => {
    btn.innerText = "Clicked"
})






