// Sumar Matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], 
]

function sumarMatriz(matriz) {
    let resultado = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado += matriz[i][j];
        }

    } 
   
}
console.log(sumarMatriz(matriz));