// Part 1
//Types

// // alert("Just a test, ANESRIF");
// console.log("Just a test, ANESRIF");
// console.error("it's an error");
// console.warn("It's just a warning");

// // var, let, const
// //var: large scoop: globale au projet
// //let: locale scoop: locale a la fonction

// var num1;
// let num2;
// const num3 = 3;

// const name = "Rostom";
// const age = 27;
// const tall = 1.75;
// const isCool = false;
// const rich = undefined;
// const married1 = NaN;
// const married2 = null;

// let position;

// console.log(typeof married2);

// let x1 = 27;
// console.log(typeof x1);
// x1 = null;
// console.log(typeof x1);
// x1 = undefined;
// console.log(typeof x1);

// console.log("His name is " + name + " and he is " + age);
// const info = `His name is ${name} and he is ${age}`;
// console.log(info);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substring(0, 3));
// console.log(name.substring(2, 4));
// console.log(name.substring(0, 3).toUpperCase());
// console.log(name.split(""));

// const s = "His name is rostom";
// console.log(s.split(" "));

// const path = `C:\\Users\\scar_\\Projects`;
// console.log(path.split(`\\`));

// const p = "c:\\n";
// console.log(p);

// const ext = `C:\\Users\\scar_\\Projects\\fileName.exe`;
// console.log(ext.split(`.`));

// Part 2
//Array

// const ar1 = Array(1, 2, 3, 4);
// console.log(ar1);

// const ar2 = ["Prod1", "Prod2", "Prod3"];
// // ar2 = []; //error
// console.log(ar2);

// //add at an index
// ar2[3] = "X";
// ar2[4] = 23;
// ar2[6] = false;
// console.log(ar2);

// //add to the end
// ar2.push("Prod4");
// ar2.push("Prod5");
// ar2.push("Prod6");
// console.log(ar2);

// //delete from the end
// ar2.pop();
// console.log(ar2);

// //add to the begging
// ar2.unshift("Prod0");
// console.log(ar2);

// console.log(Array.isArray(ar2));
// console.log(Array.isArray("is an array"));

// const str = Array.toString(ar2);
// console.log(typeof str);
// console.log(str);

// const ar3 = Array("ProdX");
// const str2 = Array.toString(ar3);
// console.log(typeof str2);
// console.log(Array.isArray(str2));
// console.log(str2);

// console.log(ar2.indexOf("Prod3"));
// console.log(ar2.indexOf("Pro")); //index: -1

// Part 3
//object

// const produit = {
//   poid: "200",
//   prix: "1600",
//   dateProduction: "24/10/2023",
//   dimenssion: {
//     hauteur: "100",
//     largeur: "120",
//     longueure: "240",
//   },
//   sousProduit: ["embalage", "etiquette", "contenu"],
// };

// console.log(produit.prix); //1600
// console.log(produit.dimenssion.longueure); //240
// console.log(produit.sousProduit[0]); //embalage

// const { poid, dateProduction, dimenssion, sousProduit } = produit;
// console.log(poid);
// console.log(dimenssion.largeur);
// console.log(sousProduit[0]);

// const articls = [
//   {
//     id: 1,
//     poid: "100",
//     prix: "1600",
//     dateProduction: "21/10/2023",
//   },
//   {
//     id: 2,
//     poid: "200",
//     prix: "2600",
//     dateProduction: "22/10/2023",
//   },
//   {
//     id: 3,
//     poid: "300",
//     prix: "3600",
//     dateProduction: "23/10/2023",
//   },
// ];

// console.log(articls);

// articls.push({
//   id: 4,
//   poid: "400",
//   prix: "4600",
//   dateProduction: "24/10/2023",
// });
// console.log(articls);
// //alert(articls); //don't use
// console.log(articls[1]);

// // Converts JSON strings to/from your types
// function toArticls(json) {
//   return JSON.parse(json);
// }
// function articlsToJson(value) {
//   return JSON.stringify(value);
// }

// const artJson = articlsToJson(articls);
// console.log(artJson);

// ///
// //simpale function
// function toJson() {
//   return JSON.stringify(articls);
// }
// //arrow function
// () => {
//   return JSON.stringify(articls);
// };

// console.log(JSON.stringify(articls));

// ///
// // for (let i = 0; i < array.length; i++) {
// //   const element = array[i];
// // }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// //console.log(i); // error: let i out of scoop

// let i = 0;
// while (i < 7) {
//   console.log(`in while boucle ${i}`);
//   i++;
// }

// for (let i = 0; i < articls.length; i++) {
//   console.log(articls[i].dateProduction);
// }

// for (let articl of articls) {
//   console.log(articl.id);
//   console.log(`Le poid est: ${articl.poid}gr`);
// }

// /// forEach
// articls.forEach(function Prix(articl) {
//   console.log(articl.prix);
// });

// articls.forEach((articl) => {
//   console.log(articl.id);
// });

// /// map
// const articlPoid = articls.map(function Poid(articl) {
//   return articl.poid;
// });
// console.log(articlPoid);

// const ArticlePoid = articls.map((articl) => {
//   return articl.poid;
// });
// console.log(ArticlePoid);

// /// filter
// const articlPrix = articls.filter(function Prix(articl) {
//   return articl.prix >= "2600";
// });
// console.log(articlPrix);

// const ArticlPrix = articls.filter((articl) => {
//   return articl.prix === "1600";
// });
// console.log(ArticlPrix);

///
// const ArticlFM = articls
//   .filter((articl) => {
//     return articl.prix >= "2000";
//   })
//   .map((articl) => {
//     return [articl.poid, articl.dateProduction];
//   });

// console.log(ArticlFM);

///
// function Asqr(value) {
//   const sqr = value * value;
//   return sqr;
// }

// console.log(Asqr(5));

// function Asqr(value) {
//   return value * value;
// }

// console.log(Asqr(5));

////
// ("use strict");
// //initialisation
// x = 2;

// //call
// console.log(x);
// console.log(calculate(x));

// //declaration
// var x;
// function calculate(value) {
//   return value * value;
// }
