const title = document.querySelector(".title");
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');

// CSSOM ----> CSS Object 

// title.computedStyleMap.color = "darkred";
// console.log(title.style); 

// title.style.fontFamily = "cursive";
// title.style.fontSize = "4rem";
// title.style.color = "darkgreen";

// title.style.color ="var(--color-title)";
// document.documentElement.style.setProperty("--color-title", "hotpink")
// console.log(title.style); 

// // Eliminar estilos en linea

// title.style.removeProperty("font-family");
// title.style.color = ""; 
// title.setAttribute("style", "");

function changeColor() {
    title.style.color = this.value;
}

inputColor.addEventListener("input", changeColor); //puede ser change o input. al poner input cambia instantanea mente.

inputRange.addEventListener("change", function () {
    const newFontSize = this.value;

    title.style.setProperty("font-size", newFontSize + "px");
})

// primera funcion fuera pero tambien se puede dentro como la de abajo y viceversa. 

console.log(getComputedStyle(title).fontSize);

const titleStyle = getComputedStyle(title, "::after");

console.log(titleStyle.content);

console.log(titleStyle.getPropertyValue("margin")); 
