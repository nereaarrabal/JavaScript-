// Bucles

//While

let count = 10;
let max = 10;

while(count < max){
    //codigo
    console.log("El valor de count es " + count); 
    count = count + 1 //---> caunt++
}

// do while

do{
    console.log("El valor de count desde do while es " + count); 
    count = count + 1 //---> caunt++
}while(count < max);

//for
// creacion variable, condiconal e incremento
for(let i = 0; i < max; i++){
    console.log("El valor de count desde el for es " + i); 
}

const array = ["nacho", "marco", "izabel", "pablo", "nerea" ];

for(let i = 0; i < array.length; i++ ){
    console.log("hola " + array[i]);
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8]; 

for (let i = 0; i < numberArray.length; i++){
    numberArray[i] = numberArray[i] * 2 
}
console.log(numberArray); 
