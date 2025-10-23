const historialPrestamos = []; //De momento no se utiliza pero cuando inegremos objetos mi idea es guardar un historial. 
const plazosDisponibles = [6, 12, 18, 24, 30, 36];
const minimo = 10000;

function mostrarResumenPrestamo(monto, plazo, tipo, tasaInteres, interesTotal, totalAPagar, cuotaMensual) {
    const resumen =
        "Resumen del préstamo:\n" +
        "Tipo: " + tipo + "\n" +
        "Monto solicitado: $" + monto.toFixed(2) + "\n" +
        "Plazo: " + plazo + " meses\n" +
        "Tasa de interés: " + (tasaInteres * 100).toFixed(2) + "%\n" +
        "Interés total: $" + interesTotal.toFixed(2) + "\n" +
        "Total a pagar: $" + totalAPagar.toFixed(2) + "\n" +
        "Cuota mensual: $" + cuotaMensual.toFixed(2);

    alert(resumen); //  Muestra al usuario
    console.log(resumen); // Tambien en consola
}

function calcularPrestamo(monto, plazo, tipo){
    let tasaInteres;

    switch (tipo) {
        case "personal":
            tasaInteres = 0.35;
            break;
        case "automotriz":
            tasaInteres = 0.25;
            break;
        case "hipotecario":
            tasaInteres = 0.15;
            break;
        default:
            tasaInteres = 0.35;
            tipo = "desconocido";
    }

    const interesTotal = monto * tasaInteres;
    const totalAPagar = monto + interesTotal;
    const cuotaMensual = totalAPagar / plazo;

    mostrarResumenPrestamo(monto, plazo, tipo, tasaInteres, interesTotal, totalAPagar, cuotaMensual);

    console.log("\nResumen del préstamo:");
    console.log("Tipo: " + tipo);
    console.log("Monto solicitado: $" + monto.toFixed(2));
    console.log("Plazo: " + plazo + " meses");
    console.log("Tasa de interés: " + (tasaInteres * 100).toFixed(2) + "%");
    console.log("Interés total: $" + interesTotal.toFixed(2));
    console.log("Total a pagar: $" + totalAPagar.toFixed(2));
    console.log("Cuota mensual: $" + cuotaMensual.toFixed(2));
}

function obtenerDatosPrestamo() {
  
    let monto;
    let plazo;
    let tipoPrestamo;

    // Validar monto mínimo con un do while porque mi idea es preguntarle hasta que elija una opcion correcta y no se me ocurrio otra forma de momento 
    do {
        monto = parseFloat(prompt("Ingrese el monto que desea solicitar en pesos con un minimo de $ "+minimo));
        if (isNaN(monto) || monto < minimo) {
            alert("El monto minimo es de $" + minimo);
            console.log("El monto mínimo para solicitar un prestamo es de $ "+minimo+" pesos.");
        }
    } while (isNaN(monto) || monto < minimo);

    // Validar plazo elegido do while porque mi idea es preguntarle hasta que elija una opcion correcta y no se me ocurrio otra forma de momento 
    do {
        plazo = parseInt(prompt("Elija un plazo disponible: "+ plazosDisponibles.join(" - ") + " meses."));
        if (!plazosDisponibles.includes(plazo)) {
            alert("Plazo no valido. Debe elegir uno de los plazos disponibles.");
            console.log("Plazo no valido. Elija un plazo disponible: "+ plazosDisponibles.join(" - ") + " meses.");
        }
    } while (!plazosDisponibles.includes(plazo));

    do {
        const opcion = parseInt(prompt(
            "Seleccione el tipo de préstamo:\n" +
            "1 - Personal (35%)\n" +
            "2 - Automotriz (25%)\n" +
            "3 - Hipotecario (15%)"
        ));

        switch (opcion) {
            case 1:
                tipoPrestamo = "personal";
                break;
            case 2:
                tipoPrestamo = "automotriz";
                break;
            case 3:
                tipoPrestamo = "hipotecario";
                break;
            default:
            alert("Opción no válida. Ingrese 1, 2 o 3.");
            console.log("Opcion no valida.");
            tipoPrestamo = null;
        }
    } while (!tipoPrestamo);
    calcularPrestamo(monto, plazo, tipoPrestamo);
}

//Ejecuto simulacion
obtenerDatosPrestamo();