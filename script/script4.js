//AJAX

///GET methode
// const http = new XMLHttpRequest();
// const url = "http://jsonplaceholder.typicode.com/posts";
// const methode = "GET";

// http.open(methode, url);
// http.onreadystatechange = function () {
//   if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//     console.log(JSON.parse(http.responseText)[0].id);
//   } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//     console.log("Error");
//   }
// };
// http.send();

// ///POST methode
// const http = new XMLHttpRequest();
// const url = "http://jsonplaceholder.typicode.com/posts";
// const methode = "POST";

// const data = "title=Post%20Title&body=Body";

// http.open(methode, url);
// http.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");
// http.onreadystatechange = function () {
//   if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
//   console.log(JSON.parse(http.responseText));
//   } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
//     console.log("Error");
//   }
// };
// http.send(data);

// const http = new XMLHttpRequest();
// const url =
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
// const methode = "GET";

// let response;

// http.open(methode, url);
// http.onreadystatechange = function () {
//   if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//     console.log(JSON.parse(http.responseText));

//     response = JSON.parse(http.responseText);
//     for (let i = 0; i < 114; i++) {
//       document.querySelector("#placeHolder").innerText +=
//         response.data[i].name + " _ " + response.data[i].englishName + "\n";
//     }
//   } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//     console.log("Error");
//   }
// };
// http.send();
