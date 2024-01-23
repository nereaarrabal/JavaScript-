// HOTEL 


function crearHabitaciones(habitacion, tipo) {
    return {
        habitacion: habitacion,
        tipo: tipo,
        reserva: false,
    }

}

const listaHabitaciones = [crearHabitaciones(101, "simple"), crearHabitaciones(102, "suit"), crearHabitaciones(103, "doble")];

function reservarHabitacion(habitacion){
 //COMPROBAR SI ESA HABITACION ESTA RESERVADA
 //sI NO LO ESTA, CAMBIAR SU ESTADO DE RESERVA
 //SI LO ESTA, RETORNAR QUE ESTA RESERVADA

if (habitacion.reserva === false) { // === comparacion 
    habitacion.reserva = true;      // = asignacion 
    console.log("Habitacion Reservada");
} else {
   console.log ("La habitacion ya se encuentra reservada");
} 

}

reservarHabitacion(listaHabitaciones[0]); 
console.log(listaHabitaciones)

reservarHabitacion(listaHabitaciones[0]); 

function verificarDisponiblidad(listaHabitaciones, tipo) {
   for (let i = 0; i < listaHabitaci0nes.length; i++) {
    if (listaHabitaciones[i].reserva === false && rooms[i].tipo === tipo) {
        return listaHabitaciones[i];
        }
    }
    return null; 

}

let habitacionParaReservar = verificarDisponiblidad(listaHabitaciones, "suit");
if (habitacionParaReservar) {
    reservarHabitacion(habitacionParaReservar)
}

console.log(listaHabitaciones);


function cancelarHabitacion(habitacion) {
    if (habitacion.reserva === true) {
        habitacion.reserva = false;
        console.log("Habitacion Cancelada");
    }else {
        console.log ("La habitacion esta reservada");
    }
}

cancelarHabitacion(listaHabitaciones[0]);
console.log(listaHabitaciones);

