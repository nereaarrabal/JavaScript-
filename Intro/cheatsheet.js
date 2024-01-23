// Hola Mundo en JS en la consola 
console.log("Hola mundo desde Cheatsheet JS");

//Variables y constantes

//camelCase 
var userName ="Nerea Arrabal";
console.log(userName);

userName = "Pepe";
console.log(userName);

if (true) {
    let surname = "Arrabal";
    var dni = "4954838C";
}

console.log(dni);

//DATOS SIMPLES

//string
// son valores de texto. Siempre se van a representar con comillas dobles o simples
const welcome = "Bienvenido a JS"

//number
//Son numeros, tanto decimales como enteros
const km = 348;

console.log(km + " " + typeof km );

//boolean 
//Sin variables que va a ser siempre verdadero o falso
//Y se representa con las palabras reservadas true y false

const isAlive = true; 

//underfined
// Quiere decir que esa variable no esta definida. no debe confundirse con null. 
let noDefine;

//null 
//Esta variable si que tiene un valor y su valor es "ninguno"
let address = null; 


// DATOS COMPLEJOS

//objetos
/* 
Los objetos se crean igual que cualquier otra variable para crearlos utilizaremos {} 
Dentro de los objetos lo que vamos a tener va a ser: propiedad/valor ---> key/value
Para darle valor a la propiedad se utilizam los dos puntos : 
Dentro de un objetos sus propiedades pueden ser de cualquier tipo
*/
const user = {
    //propiedades del objeto. Cada propiedad va separada por una capa
    name: "Nerea",
    surname: "Arrabal",
    age:18,
    address: {
        street: "Calle Unión",
        number: 18, 
    },
};

//Para acceder a alguna propiedad de nuestro objeto, se hará a traves del punto.

console.log(user.address.street);

//array / listas

/**
 Los arrays son listas de elementos (string, number, objetos, array)
 Los arrays estan siempre compuestos por los mismos elementos
 se representan con los corchetes []
 */

 const notes = [4,5,6,7];

 console.log(notes[0]) + " es la primera nota de mi lista";
 console.log(notes.length + " es el numero de elementos de mi lista");

 const students = [
    {name: "Nerea", surname: "Arrabal"},
    {name: "Isabel", surname: "Vazquez"},
    {name: "Francisco", surname: "Arrabal"},
    {name: "Ethan", surname: "Lopez"},
 ]

 console.log(students[1].surname);

 //funciones

 //Comparaciones / Asignaciones

 //Asignacion 
 //Para asignarle un valor a una variable se utiliza un solo igual = 
 const x = 4; 

 //Doble igual == 
 /**
  Con el doble igual lo que estamos comparando es si dos variables tienen el mismo valor
  independientemente de su tipo
  */

  const a = 2;
  const b = "2";

  console.log(a == b);

  //Triple igual ===
  //Compara dos variables incluyendo su tipo. Para que sea true tienen que ser estrictamente iguales

  const c = 3;
  const d = "3";
  console.log(c === d);

  //diferente de != 
  //este compara si dos variables son distintas independientemente de su tipo

  const f = "2";
  const h = 2;
  console.log(f != h);

  //Estrictamente diferente !==
  //Compara el valor de dos variables incluyendo su tipo
  console.log(f !== h);
  console.log(f + h); //si uno de los elementos es un string lo que hara sera concatenar las dos variables

  //Condiones
  //Se utilizam cuando queremos tener un resultado depensiendo de si cumplen o mo las condiciones

  const demon = "var";
  const isDemon = demon === "var" && isAlive === false; // ---> false
  console.log(isDemon); 
  //&& significa "y" y lo que comprueba es que las condiciones se cumplan.

  const isGod = demon !== "var" || isAlive === true; // ---> true
  // || significa "o" y lo que comprueba es que una de las condiciones se cumple 
  

  //negacion 
  // Se utiliza la exclamacion para cambiarle el valor a un elemento booleano 
  const isDead = !isAlive;
  console.log(isDead);

  const isAdult = false;

  const cantBuyAlcohol = !isAdult;

  const michaelJackson = {
    isBlack: true,
  }

  const harrisonFord = {
    isBlack: !michaelJackson.isBlack,
  }

  console.log("Es negro Marrison Ford?" + " " + harrisonFord.isblack);

  const isWater = true;
  const cantShower = !isWater; 


  
//Valores truthy y falsy
// Todos los valores siguientes retornan false

Boolean(false);
Boolean(0);
Boolean(-0);
Boolean(0n);
Boolean("");
Boolean(``);
Boolean(null);
Boolean(undefined);
Boolean(NaN);

//cualquier otro valor retorna true

Boolean(true);
Boolean([]);
Boolean({});
Boolean("Hola mundo");
Boolean(new Date());