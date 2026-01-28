console.log("\n=== DOM Manipulation Example ===\n");
/*
let welcomParagraph = document.getElementById('welcome');
let infoText = document.getElementsByClassName('info');


console.log(welcomParagraph.textContent);

console.log(infoText[0].textContent);
*/

let is1 = document.querySelector('#is1');
let parentNode = document.querySelector('#parentNode');
let children = parentNode.children;

console.log(is1.textContent);
for (let i = 0; i < children.length; i++) {
children[i].textContent = "hello"
 children[i].style.color = "red"
}


