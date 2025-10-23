const ihstorialPrestamos = [];
const plazosDisponibles = [6, 12, 18, 24, 30, 36];
let minimo = 10000

function ObtenerDatosPrestamo() {
    const monto = parseFloat(prompt("Ingrese monto que desea solicitar en pesos: "))
    if(isNaN(monto) || monto < minimo) {
        console.log("El monto minimo para solicitar un prestamos es de "+ minimo +" pesos.")
    }
}

  console.log("Nuestros plazos disponibles son:");
  console.log(plazosDisponibles.join(" - ") + " meses");

  ObtenerDatosPrestamo()