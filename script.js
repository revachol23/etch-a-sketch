const main = document.getElementById("main");

for(let i = 0; i < 256; i++){
let square = document.createElement("div")
square.classList.add("grid")
main.appendChild(square);
}