const main = document.getElementById("main");
const button = document.getElementsByClassName('canvasBtn')[0]

function gridGen(){
for(let i = 0; i < 256; i++){
let square = document.createElement("div")
square.classList.add("grid")
main.appendChild(square);
square.addEventListener('mouseover',(e) => e.target.style.background = 'black')
}}

gridGen()

function gridMod(gridNums){
while (main.firstChild){
    main.removeChild(main.firstChild)
}
for(let i = 0; i < gridNums** 2; i++){
    let square = document.createElement("div")
    square.classList.add("grid")
    main.appendChild(square);
    main.setAttribute('style', `grid-template-columns:repeat(${gridNums}, 1fr); grid-template-rows:repeat(${gridNums}, 5vw)` )
    square.addEventListener('mouseover',(e) => e.target.style.background = 'black')
    }
}

button.addEventListener('click', function(){
    let numInfo = prompt('Number of squares per side for the new grid?');
    if (numInfo < 100){
    gridMod(numInfo)}
    else alert('Use a lower number.')
})
