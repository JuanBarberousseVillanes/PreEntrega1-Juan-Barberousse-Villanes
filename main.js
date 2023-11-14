let nombreValido = false;
let tipoServicioValido = false;
let nombre;
let tipoServicio;
let costoTotalServicio = 0;
let cantidadFotos = 0;
let duracionVideo = 0;
let cantidadFotosValida = false;
let duracionValida = false;

do {
    nombre = prompt("Bienvenidos a DronShotMedia, indique su nombre completo.");
    if (nombre == null || nombre == "") {
        alert("Ingrese un nombre valido");
    } else {
        nombreValido = true;
    }
} while (!nombreValido);
do {
    tipoServicio = prompt("Seleccione el tipo de servicio que desea adquirir: Fotografia/Video/Ambos");
    if (tipoServicio == null || tipoServicio == "") {
        alert("Ingrese un tipo de servicio valido");
    } else {
        if (tipoServicio.toLowerCase() == 'fotografia') {
            do {
                cantidadFotos = +prompt("Ingrese cantidad de fotos deseada: Minimo 1, Maximo 30");
                if (cantidadFotos == null || cantidadFotos == 0 || cantidadFotos < 0 || cantidadFotos > 30) {
                    alert("Ingrese una cantidad de fotos valida");
                } else if (isNaN(cantidadFotos)) {
                    alert("Porfavor introduzca un valor numerico");
                } else {
                    cantidadFotosValida = true;
                }
            } while (!cantidadFotosValida);
            for (let i = 0; i < cantidadFotos; i++) {
                costoTotalServicio += 300;
            }
            tipoServicioValido = true;
        } else if (tipoServicio.toLowerCase() == 'video') {
            do {
                duracionVideo = +prompt("Seleccione la duracion del video: El tiempo debe ser ingresado en minutos. Minimo 1 min, Maximo 60 min")
                if (duracionVideo == null || duracionVideo == 0 || duracionVideo < 0 || duracionVideo > 60) {
                    alert("Ingrese una duracion valida");
                } else if (isNaN(duracionVideo)) {
                    alert("Porfavor introduzca un valor numerico")
                } else {
                    duracionValida = true;
                }
                for (let i = 0; i < duracionVideo; i++) {
                    costoTotalServicio += 50;
                }
            } while (!duracionValida);
            tipoServicioValido = true;
        } else if (tipoServicio.toLowerCase() == 'ambos') {
            do {
                cantidadFotos = +prompt("Ingrese cantidad de fotos deseada: Minimo 1, Maximo 30");
                if (cantidadFotos == null || cantidadFotos == 0 || cantidadFotos < 0 || cantidadFotos > 30) {
                    alert("Ingrese una cantidad de fotos valida");
                } else if (isNaN(cantidadFotos)) {
                    alert("Porfavor introduzca un valor numerico");
                } else {
                    cantidadFotosValida = true;
                }
            } while (!cantidadFotosValida);
            for (let i = 0; i < cantidadFotos; i++) {
                costoTotalServicio += 300;
            }
            do {
                duracionVideo = +prompt("Seleccione la duracion del video: El tiempo debe ser ingresado en minutos. Minimo 1 min, Maximo 60 min")
                if (duracionVideo == null || duracionVideo == 0 || duracionVideo < 0 || duracionVideo > 60) {
                    alert("Ingrese una duracion valida");
                } else if (isNaN(duracionVideo)) {
                    alert("Porfavor introduzca un valor numerico")
                } else {
                    duracionValida = true;
                }
                for (let i = 0; i < duracionVideo; i++) {
                    costoTotalServicio += 50;
                }
            } while (!duracionValida);
            tipoServicioValido = true;
        } else {
            alert("Ingrese un tipo de servicio valido");
        }
    }
} while (!tipoServicioValido);


function darTotal(nombreCliente,costoServicio) {
    alert(nombreCliente + " el costo del servicio requerido sera de " + "$" + costoServicio);
}

darTotal(nombre,costoTotalServicio);