//funciones
//Metodos que automatizan procedimientos.

//Funcion nombrada con retorno
function convertStringToNumber(stringNumber) {
    return Number(stringNumber);
  }
  
  console.log(convertStringToNumber("3")); // ---> 3
  
  //-------------------------- Funcion nombrada sin retorno ---------------------------
  
  //Estado del usuario antes de ejecutar ninguna accion
  let state = 1;
  console.log(
    "Estado del usuario antes de cambiar su estado en la funcion: " + state
  ); // Cuando estas logueado en la web ---> 1
  
  function changeUserStatus() {
    state = 2;
  } // funcion de logout
  
  //Se ejecuta la funcion y el estado del usuario cambia
  changeUserStatus(); // El usuario clica el boton de logout
  
  console.log("Estado del usuario despues de ejecutar la funcion: " + state);
  
  //---------------------------------------
  
  let currentTime = new Date().getTime(); //Nos da los milisegundos desde 1/1/1970
  console.log(currentTime);
  
  function getCurrentTime() {
    currentTime = new Date().getTime();
    console.log(currentTime);
  }
  
  setTimeout(getCurrentTime, 2000);

  // variables con funciones como valor

  const convertStringToNumber2 = function (stringNumber) {
    return Number (stringNumber);
  };

  convertStringToNumber2("4");

  const convertStringToNumber3 = (stringNumber) => Number (stringNumber);

  const number = convertStringToNumber3("45");

  console.log(number);
  
