

let countElement = document.getElementById("count-el");
let saveEl = document.getElementById("saved-el");
let count = 0;

function increment() {
count = count + 1;
countElement.textContent = count;
}

function save(){
let saveElement= count + " - ";
saveEl.innerText += saveElement;
countElement.textContent = 0;
count = 0;
   
}