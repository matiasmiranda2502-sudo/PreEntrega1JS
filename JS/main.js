// const ihstorialPrestamos = [];
// const plazosDisponibles = [6, 12, 18, 24, 30, 36];
// let minimo = 10000

// function ObtenerDatosPrestamo() {
//     let monto;
//     let plazo;
    
//     monto = parseFloat(prompt("Ingrese monto que desea solicitar en pesos: "))
//     if(isNaN(monto) || monto < minimo) {
//         console.log("El monto minimo para solicitar un prestamos es de "+ minimo +" pesos.")
//     }
//     else{
//         plazo = parseFloat("Nuestro plazo disponibles son: " + plazosDisponibles)
//     }
// }

//   console.log("Nuestros plazos disponibles son:");
//   console.log(plazosDisponibles.join(" - ") + " meses");

//   ObtenerDatosPrestamo()

const historialPrestamos = [];
const plazosDisponibles = [6, 12, 18, 24, 30, 36];
const minimo = 10000;

function obtenerDatosPrestamo() {
  let monto;
  let plazo;

  // Validar monto mínimo con un do while porque mi idea es preguntarle hasta que elija una opcion correcta y no se me ocurrio otra forma de momento 
  do {
    monto = parseFloat(prompt("Ingrese el monto que desea solicitar en pesos con un minimo de $ "+minimo));
    if (isNaN(monto) || monto < minimo) {
      console.log("El monto mínimo para solicitar un préstamo es de ${minimo} pesos.");
    }
  } while (isNaN(monto) || monto < minimo);

  // Validar plazo elegido do while porque mi idea es preguntarle hasta que elija una opcion correcta y no se me ocurrio otra forma de momento 
  do {
    plazo = parseInt(prompt("Elija un plazo disponible: "+ plazosDisponibles.join(" - ") + " meses."));
    if (!plazosDisponibles.includes(plazo)) {
      console.log("Plazo no válido. Elija un plazo disponible: "+ plazosDisponibles.join(" - ") + " meses.");
    }
  } while (!plazosDisponibles.includes(plazo));

  return { monto, plazo };
}

const datos = obtenerDatosPrestamo();
console.log("Datos ingresados:", datos);
