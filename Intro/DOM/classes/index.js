const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const claseModal = document.querySelector(".modal__close");

button.classList.add("primary"); 

console.log(button.classList.item(1));

button.addEventListener("click", function () {
    console.log(modal.classList);
    modal.classList.add("show");
    console.log(modal.classList);
});

closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
});

button.addEventListener("click", function () {
    /* if (button.matches(".red")) {
        button.classList.remove("red");
    } else {
        button.classList.add("red");
    }*/

    button.classList.toggle("red"); 
})

console.log(button.classList.contains("red")); 

