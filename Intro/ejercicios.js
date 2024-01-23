//Mostrar por consola a traves de los bucles while,do while y for numeros del 0 al 35

let number = 0;
let number2 = 0; 
let max2 = 35; 

while (number < max2 ){
    console.log("El valor de number es " + number); 
    number = number + 1 //---> caunt++
}

do{
    console.log("El valor de number desde do while es " + number2); 
    number2= number2 + 1 //---> caunt++
}while(number2 < max2);

for(let i = 0; i < max2; i++){
    console.log("El valor de number desde el for es " + i); 
}



// hacer una cuenta atras desde 10 hasta 0 y al final felicitar el año nuevo.
// tambien con todos los bucles

let number3 = 10;
let number4 = 10; 
let min = 0;

while (number3 > min ){
    console.log(number3); 
    number3 = number3 - 1 
}
console.log("Feliz Año Nuevo")


do{
    console.log(number4); 
    number4= number4 - 1 
}while(number4 > min);
console.log("Feliz Año Nuevo")

for(let i = 10; i > min; i--){
    console.log(i); 
}
console.log("Feliz Año Nuevo")


// crear una funcion que reciba un numero e imprima por consola todos los numeros
// incluyendose a el mismo, hasta el 0

function countDown(number, min) {
    while (number > min){
        console.log(number);
        number = number - 1;
    }
}
countDown(16,0);

// crear una funcion  que reciba una letra y un numero e imprima por consola la letra recibida 
//en argumentos el numero de veces que le hayamos pasado

console.log("----Funcion numberAndletters----");

function repeatCharacter(character, repeat) {
    let result = "";
    for (let i = 0; i < repeat; i++) {
        result = result + character; 
    }
    console.log(result);
}
repeatCharacter("P", 6); 

// crear una funcion que reciba un array de numeros,
// los sume y muestre por consola la media aritmetica

console.log("----Funcion Array----");

function averageArray(arrayNumber) {
    let total = 0; 
    for (let i = 0; i < arrayNumber.length; i++){
        total = total + arrayNumber[i]; 
    }
    console.log(total / arrayNumber.length)
}
averageArray([12, 4, 5, 6, 7, 7, 8])

// Escribir una funcion que reciba una cantidad a inventir, el interes anual y el numero de años
// y muestre por consola el capital obtenido en la inversion cada año de la inversion

function investment(amount, interest, years){
    let amountWithInterest = amount;
    for (let i = 0; i < years; i++ ) {
        amountWithInterest = amountWithInterest * (1 + interest / 100);
       console.log ( "El dinero generado en el año " + (i + 1) + " es " + amountWithInterest.toFixed(2));
    }
}
investment(1000, 10, 5)