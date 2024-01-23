//Paso por valor y paso por referencia 

let num = 5;

let num2 = num; 

num = 9; 

console.log(num2); 

let user = {
    name: "Nerea",
};
let user2 = user;

user.name = "Pepe";

console.log(user2.name);

user2.name = "Veronica";

console.log(user.name);
console.log(user2.name);


function modificarValor(numero){
    numero = numero * 2;
    console.log(numero + " valor dentro de la funcion")
}

let a = 8;
modificarValor(a);
console.log(a + " valor fuera de la funcion");

function modificarArray(array){
    array[0] = "pepe";
    console.log(array + " array dentro de la funcion");
}

let myArray = ["nacho", "nerea", "pablo"];
modificarArray(myArray);
console.log(myArray + " array fuera de la funcion");

function modificarObjeto(obj) {
    obj.name = "David";
    console.log(obj.name + " objeto dentro de la función");
}

let admin = {
    name: "Marco",
};
modificarObjeto(admin);
console.log(admin.name + " objeto fuera de la funcion");


function createUser(name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age,
    };
}

const myUser = createUser("pepe", "lopez", 34);

function addAddress(user){
    user.address = "Calle, Larios"
}

console.log(myUser);
addAddress(myUser);
console.log(myUser);