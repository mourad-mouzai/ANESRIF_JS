//DOM

// console.log(window);

// console.log(innerWidth);
// console.log(outerWidth);

// console.log(innerHeight);
// console.log(outerHeight);

// localStorage.setItem("Theme", "Dark");
// // localStorage.removeItem("Theme");
// console.log(localStorage.getItem("Theme"));

// sessionStorage.setItem("Language", "En");
// console.log(sessionStorage.getItem("Language"));

document.body.children[1].textContent = "Hello ROSTOM!";
console.log(document.body.children[1].textContent);

// console.log(document.body.children[2].children[1].children[0].textContent);
// console.log(document.body.children[2].children[1].children[0].innerText);
console.log(document.body.children[2].children[1].children[0]);

document.body.children[2].children[1].children[0].textContent =
  "www.google.com";
document.body.children[2].children[1].children[0].href = `http://www.google.com`;
document.body.children[2].children[1].children[0].style.color = "red";

console.log(document.body.children[2].firstChild); //le text vide avant le li
console.log(document.body.children[2].firstElementChild); //c'est le li
console.log(document.body.children[2].lastElementChild);
console.log(document.body.children[2].firstElementChild.nextElementSibling);
console.log(document.body.children[2].firstElementChild.previousElementSibling);

console.log(document.getElementById("menuItem").innerText);
document.getElementsByTagName("a")[0].style.color = "red";

document.body.getElementsByTagName("a")[3].style.color = "red";

let tagsA = document.body.getElementsByTagName("a");
for (let tagA of tagsA) {
  tagA.style.color = "orange";
}
document.getElementById("menuItem").style.color = "red";

document.getElementById("menuItem").href = `http://www.google.com`;
document.getElementById(
  "menuList"
).children[1].children[0].href = `http://www.google.com`;

console.log(document.getElementsByClassName("list"));

///
console.log(document.querySelector("a")); // first tagName a
console.log(document.querySelectorAll("a")); // tagName a

console.log(document.querySelector(".list")); //className

console.log(document.querySelector("#menuItem")); //Id

console.log(document.querySelector("ul").nextElementSibling);

///
let a = document.querySelector("ul");
let li = document.createElement("li");
let x = a.appendChild(li);

let y = document.createElement("a");
y.textContent = "lorem epsum";
y.style.color = "orange";
y.href = "#";
x.appendChild(y);

//

let p2 = document.createElement("p");
p2.textContent = "lorem epsum 2";
p2.style.color = "teal";

let b = document.querySelector("body");
let ul = document.querySelector("ul");
b.insertBefore(p2, ul);

//

let p3 = document.createElement("p");
p3.textContent = "lorem epsum 3";
p3.style.color = "teal";

let c = document.querySelector("body");
c.appendChild(p3);

//

// let ul2 = document.querySelectorAll("ul")[1];
// let ul2 = document.querySelector("body").children[3];
let ul2 = document.querySelector("ul").nextElementSibling;
let li1 = document.querySelector("il");

ul2.style.backgroundColor = "red";
ul2.remove();
