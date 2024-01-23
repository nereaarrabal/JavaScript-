const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector ('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

input.addEventListener("change", function (event) {
    //console.log(event.target.value);
    //console.log("Has perdido el foco");
    changeUser.textContent = event.target.value;
});

// Formas menos adecuadas

function controladorEvento() {
    const name = prompt("¿Como te llamas?");
    alert(`Hola ${name}`); 
}

buttonShow.onclick = controladorEvento;

buttonShow.onclick = null; 

/* // Forma mas adecuada para agregar metodos: 

//buttonShow.addEventListener("click", controladorEvento);

function showSection() {
    wrapper.className = "show";
}
function hideSection() {
    wrapper.className = "hide";
}

buttonShow.addEventListener("click", showSection);
buttonHide.addEventListener("click", hideSection);

wrapper.addEventListener("click", function() {
    event.target.style.backgroundColor = "pink";
})

const form = input.parentElement;
//const form = document.querySelctor("form")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Prevenimos el comportamiento por defecto del formulario para tratar los datos antes de enviarlos.
    // Verificaciones ---> email es un email, password tiene 8 caracteres
});  */

// objeto "this"

/**
 * hace referecia al 
 * objeto en el contexto actual, es decir, cuando se utiliza un manejador de 
 * eventos que es llamado en un listener, this hace referencia al objeto actual,
 * que en este caso esel nodo que activa el
 * evento, si damos click en el boton , vemos que this es igual al elemento actual.
*/

/**function showSection(e) {
    e.preventDefault();
    wrapper.className = "show";
    this.textContent = "Me han cambiado el nombre";
}

function hideSection(e) {
    e.preventDefault();
    console.log(this); 
    wrapper.className = "hide";
    this.textContent = "Me han cambiado el nombre"; 
}

buttonShow.addEventListener("click", showSection); 
buttonHide.addEventListener("click", hideSection); */

/*const buttonGreen = document.querySelector('[data-color = "darkgreen"]');

buttonGreen.addEventListener("click", hideSection); */

// en las funciones con flecha el this no funciona como objeto, funciona como window 
/**const showSection2 = (e) =>  {
 e.preventDefault();
 console.log(this); 
 wrapper.className = "show";
 buttonShow.textContent = "Me han cambiado el nombre"; 
}

/**
 * this no hara referencia al objeto donde se disparo el evento,
 * sino al objeto global window
 * esto es xq cuando usamos funciones flechs no sera el del objero donde se produjo la accion
 * sino que tomara el contexto de la funcion contenedora de la funcion flecha, en este caso el 
 * objero window. 
*/

//buttonShow.addEventListener("click", showSection2); 

// ------------ Event bubbling o propagacion de eventos --------------------------

/**
 * es una caracteristicas de los eventos en js. Cuando hacemos click en un boton se ve a generar 
 * una accion en ese boton, eso ya lo sabemos, pero no solo se generara una accion en ese elemento 
 * sino que se creara tb en el contenedor de ese elemento y en los sucesivos contenedores, basicamente 
 * propaga el evento en la jerarquia del dom, esto es la propagacion de eventos y es un comportamiento
 * por defecto. 
*/
const section = document.querySelectorAll(".section")[1]; 

function handleEvent(e) {
    console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

/**function handleEventStop(e) {
 e.stopPropagation()
 console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

buttonShow.addEventListener("click", handleEventStop); 
section.addEventListener("click", handleEvent);
document.body.addEventListener("click", handleEvent);*/

/**
 * stopImmediatePropagation() hace practicamente lo mosmo que stopPropagation() con la diferencia
 * que este metodo evita que un elemento tenga mas de un manejador de evento
*/

function handleEventStop(e) {
    e.stopImmediatePropagation();
    console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

/**buttonShow.addEventListener("click", handleEventStop);
section.addEventListener("click", handleEvent);
document.body.addEventListener("click", handleEvent);

buttonShow.addEventListener("click", function () {
alert("Hola mundo");
}); 

*/

// Fase de captura

/**
En la fase de captura los eventos se capturan de manera descendente, esta fase se activa
pasandole un tercer parametro a un eventListener como objeri cin la propiedad capture 
*/

// buttonShow.addEventListener("click", handleEvent ,{capture: true});
// section.addEventListener("click", handleEvent,{capture: true});
// document.body.addEventListener("click", handleEvent,{capture: true});

// --------------------- matches()

const elements = document.querySelectorAll("[data-id]");
//console.log(elements);

/**
 * matches se utiliza en cualquier nodo de tipo elemento y recibe un
 * selector de tipo Css como parametro y va a comprobar si el parametro css 
 * coincide con el nodo 
 * actual, si coincide retornara true, sino false. 
 */

for (element of elements) {
   // console.log(element)
    const currentElement = element.matches('[data-id="button-show"]');
    console.log(currentElement);
    if(currentElement) {
        console.log(element)
        console.log(`El elemento ${element.nodeName} contiene el valor de button-show en su atributo`);
    }
}

//----------- closest()

console.log(input.closest(".wrapper")); 

//----------- Event Delegation

/**
 * Nos permite aprovecharnos de la propagacion de eventos para determinar un manejador 
 * de eventos a un contenedor de eventos que haga una accion determinada por cada nodo que contiene.
 * en el lugar de declarar un manejador de eventos por cada nodo vamos a declarar un manejador de eventos
 * global, esto optimiza el rendimineto y ademas reduce la cantidad de manejadores que se implementan, en
 * lugar de poner un manjeador por cada boton haremos uno para que la seccion que contiene a los 
 */
const sectionColor = document.querySelector(".section"); 

function eventDelegation(e) {
    console.log(e);
    if (e.target.matches(".button-color")){
        const color = e.target.getAttribute("data-color"); 
        e.target.style.backgroundColor = color; // para cambiar el color del botton
        e.currentTarget.style.backgroundColor = color; // para cambiar el color del fondo
        // this.currentTarget.style.backgroundColor = color; lo mismo que la 196 pero con this. 
    }
}

sectionColor.addEventListener("click", eventDelegation);




