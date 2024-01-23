// Tabla de multiplicar 

function tablaMultiplicar(number) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado = i * number; 
         console.log(`${number}  x  ${i} = ${resultado}`);
    } 
}
tablaMultiplicar(8);

// Tablas de multiplicar

function tablasDeMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j; 
            console.log(`${i}  x  ${j} = ${resultado}`);
        }
    } 

} tablasDeMultiplicar()


// Candado

function convinacionesCandado() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let d = 1; d <= 3; d++) {
        let resultado  = `${i}${j}${d}`;
        console.log(resultado);
      }
    }
  }
} convinacionesCandado();

function ramdonNumberCombination(digits) {
    let result = "";
    for (let i = 0; i < digits; i++) {
        result += Math.floor(Math.random() * 3) +1
    }
    return result;
}

function getCombinationNumber() {
    let attempts = 1;
    const combination = ramdonNumberCombination(3);
    for (let i = 1; i<=3; i++) {
        for (let j = 1; j<=3; j++) {
            for (let d = 1; d<=3; d++){
                if (combination === `${i}${j}${d}`) {
                    return `Has encontrado la combianacion en el ${attempts}º intento y era ${combination}`; 
                }else{
                    attempts++
                }

            }
        }
    }
}
console.log(getCombinationNumber())