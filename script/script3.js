/// events

// alert("it's an error");

// let response = confirm("Are you sur?");
// if (response) {
//   document.getElementById("response").innerText = response;
// }

// let name = prompt("Give me your name please");
// if (name) {
//   document.getElementById("response").innerText = `Hello ${name}`;
// }

// cas 1
//dans le HTML: <button onclick="clickMe()">direct function</button>
// function clickMe() {
//   alert("You clicked me!");
// }

// cas 2
// cause un problème en cas de plusieurs events
// let btn = document.querySelector("button");

// btn.onclick = function () {
//   alert("You clicked me!");
// };

// btn.onclick = function () {
//   document.getElementById("response").innerText = `Hello man`;
// };

//methode à utiliser
let btn = document.querySelector("button");

//"click" c'est l'evenement sans le "on"
btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);

setTimeout(function () {
  btn.removeEventListener("click", listener1);
}, 2000);

function listener1() {
  alert("You clicked me!");
}

function listener2() {
  document.getElementById("response").innerText = `Hello man`;
}
