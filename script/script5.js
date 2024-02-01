// async function showData() {
//   try {
//     const response = await fetch("http://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();

//     for (let i = 0; i < 10; i++) {
//       document.querySelector("#placeHolder").innerText += data[i].body + "\n";
//     }
//   } catch (error) {
//     console.log("l'erreur est ", error);
//   }
// }

fetch("http://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    for (let i = 0; i < 10; i++) {
      document.querySelector("#placeHolder").innerText += data[i].body + "\n";
    }
  })
  .catch((error) => {
    console.log("error", error);
  });
