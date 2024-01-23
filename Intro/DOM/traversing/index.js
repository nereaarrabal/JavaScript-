const wrapper = document.querySelector("#wrapper");
const title = document.querySelector(".title");
const link = document.querySelector(".link.bold");
const input = document.querySelector("[type='number']");

console.dir(input); 

//wrapper.className = "container";

//wrapper.innerHTML += '<h2> HTML modificado desde js</h2>'

//wrapper.innerHTML += `<img src='error' onerror= 'alert("te acabo de hackear")'>`; 

//wrapper.outerHTML ="<h1> Mi nuevo HTML</h1>";

//console.log(wrapper);

//const h1 = document.querySelector("h1");
//console.log(h1); 

//const userName = prompt("¿Como te llamas?");

//title.textContent = `Hola bienvenido al DOM, ${userName}`;

console.log(input.getAttribute("type"));
console.log(input.attributes);
console.log(input.hasAttribute("name"));

input.setAttribute("value", 333);

//input.removeAttribute("value");

const img = document.querySelector('[data-identificador="img"]');
img.setAttribute("class", "img");
const figcaption = document.querySelector("figcaption"); 

img.src=
"https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"

figcaption.textContent = img.dataset.textomostrar; 
