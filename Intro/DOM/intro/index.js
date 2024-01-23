const div = document.body.children[0];
console.log(div);

console.log(div.nextSibling); 
console.log(div.nextElementSibling);

console.log(div.previousElementSibling);

const h1 = div.firstElementChild

console.log(h1);

const anchor = div.children[1].firstElementChild; 

console.log(anchor); 

//anchor.addEventListener("click", function(){
   // h1.textContent = "Me modifican desde el boton";
//})

anchor.addEventListener("click", function(){
    h1.textContent= "Me modifican desde el boton"; 
    document.documentElement.style.backgroundColor = "#000";
    document.documentElement.style.color = "#fff";
});

console.log(anchor.parentElement);

//--------- VIDA REAL -------------

const links = document.getElementsByClassName("link");
console.log(links); 

const divs = document.getElementsByTagName("div"); 
console.log(divs); 

const input = document.getElementsByName("telephone"); 
console.log(input); 

const firstAnchor = document.querySelector("#wrapper a");
console.log(firstAnchor);

const anchorList = document.querySelectorAll("#wrapper a");
console.log(anchorList);

const secondAnchor = document.querySelectorAll("#wrapper a") [1];
console.log(secondAnchor);

const fithAnchor = document.createElement("a");
fithAnchor.setAttribute("class", "link");
fithAnchor.setAttribute("href", "#");
fithAnchor.textContent = "Quinto hijo";
divs[1].append(fithAnchor);

const fourthAnchor = document.createElement("a"); 
fourthAnchor.setAttribute("class", "link");
fourthAnchor.setAttribute("href", "#");
fourthAnchor.textContent = "Cuarto hijo";
divs[1].insertBefore(fourthAnchor, fithAnchor);
