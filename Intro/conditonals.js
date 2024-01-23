//Condicionales - if/else

/**
 Las condicionales if/else nos permiten ejecutar codigo, siempre y cuando 
 se cumpla la condicion que hayamos programado.
 */

 const noWater = false;

 const canShower = !noWater;

 if(canShower === true) {
    console.log("Estaré limpio");
 } else {
    console.log("Oleré mal");
 }

 //Ejemplo else if

 const grades = 85;

 if(grades >= 90){
   console.log("Aprobaste con sobresaliente")
 } else if (grades >=70 ){
   console.log("Aprobaste con notable")
 } else if (grade >= 50){
   console.log("Aprobaste con suficiente")
 } else {
   console.log("Suspendiste");
 }

 const age = 25;

 if(age >= 65){
   console.log("Estas jubilado")
 } else if(age >= 18 && age < 65 ){
   console.log("Cotiza")
 } else {
   console.log("A estudiar"); 
 }


 // Estructura switch

 const fruit = "melon";

 switch (fruit) {
  case "melon":
    console.log("Que rico el melon en diciembre")
    break;
  case "papaya":
    console.log("Que fruta tan tropical");
    break;
  case "sandia": 
   console.log("Has elegido la sandia");
  default:
    console.log("Es otra fruta");
    break;
 }

 const grados = 85; 

 switch (true) {
  case grados >=90:
    console.log("Aprobaste con sobresaliente");
    break;
  case grados >=70:
    console.log("Aprobaste con notable");
    break;
  case grados >=50:
    console.log("Aprobaste con suficiente");
    break; 
  default:
    console.log("Suspendiste");
    break;
 }

