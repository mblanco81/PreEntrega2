/*
// Se reemplazan por el objeto objCliente
let nombreCliente = "";
let emailCliente = "";
*/

// Creo un objeto Cliente
const objCliente = {
    nombreCliente : " ",
    emailCliente : " ",
}

/*
// CONTANTES SERVICIOS/REPARACION (se reemplazan por constructos Servicios y 
// se crean los objetos objServicio1, objServicio2....)
const td = "TREN DELANTERO";
const cctba = "CAMBIO DE CORREA, TENSORES Y BOMBA DE AGUA";
const cb = "CAMBIO DE BUJIAS";
const rba = "REPARACION BURRO DE ARRANQUE";
const cayf = "CAMBIO DE ACEITE Y FILTROS";
const ayb = "ALINEACION Y BALANCEO";
const cn = "CAMBIO DE NEUMATICOS";
*/

// Creo un CONSTRUCTOR o PLANTILLA Servicios()
function Servicios(codigo,servicio){
    this.codigoServicio = codigo
    this.detalleServicio = servicio
}

// Creo objetos ServicioX en base al constructor Producto()
const objServicio1 = new Servicios("td","TREN DELANTERO")
const objServicio2 = new Servicios("cctba","CAMBIO DE CORREA, TENSORES Y BOMBA DE AGUA")
const objServicio3 = new Servicios("cb","CAMBIO DE BUJIAS")
const objServicio4 = new Servicios("rba","REPARACION BURRO DE ARRANQUE")
const objServicio5 = new Servicios("cayf","CAMBIO DE ACEITE Y FILTROS")
const objServicio6 = new Servicios("ayb","ALINEACION Y BALANCEO")
const objServicio7 = new Servicios("cn","CAMBIO DE NEUMATICOS")

/*
//CONSTANTES DIAS (se reemplaza por array diasTurnos)
const lunes = "LUNES";
const martes = "MARTES";
const miercoles = "MIERCOLES";
const jueves = "JUEVES";
const viernes = "VIERNES";
const sabado = "SABADO";
*/

const diasTurnos = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"]

/*
//COSNTANTES HORA (se reemplaza por array horasTurnos)
const doceymedia = "12:30";
const ochoymedia = "08:30";
*/

const horasTurnos = ["12:30","08:30"]


let opcionTurnoSeleccionado = "";
let opcionReparacionSeleccionada = "";
let detalleReparacionSeleccionada = "";

function IngresoDatosCliente() {
    objCliente.nombreCliente = prompt("Ingrese su nombre")
    while (objCliente.nombreCliente == "")  {
        objCliente.nombreCliente = prompt("Debe ingresar su nombre")
    }
    objCliente.emailCliente = prompt("Ingrese su correo")
    while (objCliente.emailCliente == ""){
        objCliente.emailCliente = prompt("Debe ingresar su correo")
    }
}

function ValidarSeleccionReparacion() {
    switch (opcionReparacionSeleccionada) {
        case "1":
            opcionReparacionSeleccionada = objServicio1.codigoServicio;
            detalleReparacionSeleccionada = objServicio1.detalleServicio;
            break;
        case "2":
            opcionReparacionSeleccionada = objServicio2.codigoServicio;
            detalleReparacionSeleccionada = objServicio2.detalleServicio;
            break;
        case "3":
            opcionReparacionSeleccionada = objServicio3.codigoServicio;
            detalleReparacionSeleccionada = objServicio3.detalleServicio;
            break;
        case "4":
            opcionReparacionSeleccionada = objServicio4.codigoServicio;
            detalleReparacionSeleccionada = objServicio4.detalleServicio;
            break;    
        case "5":
            opcionReparacionSeleccionada = objServicio5.codigoServicio;
            detalleReparacionSeleccionada = objServicio5.detalleServicio;
            break;    
        case "4":
            opcionReparacionSeleccionada = objServicio6.codigoServicio;
            detalleReparacionSeleccionada = objServicio6.detalleServicio;
            break;    
        case "5":
            opcionReparacionSeleccionada = objServicio7.codigoServicio;
            detalleReparacionSeleccionada = objServicio7.detalleServicio;
            break;    
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

function ValidarSeleccionTurno() {
    switch (opcionTurnoSeleccionado) {
        case "LU1":
            opcionTurnoSeleccionado = diasTurnos[0] + " " + horasTurnos[0]
            break;
        case "LU2":
            opcionTurnoSeleccionado = diasTurnos[0] + " " + horasTurnos[1]
            break;
        case "MA1":
            opcionTurnoSeleccionado = diasTurnos[1] + " " + horasTurnos[0]
            break;
        case "MA2":
            opcionTurnoSeleccionado = diasTurnos[1] + " " + horasTurnos[1]
            break;    
        case "MI1":
            opcionTurnoSeleccionado = diasTurnos[2] + " " + horasTurnos[0]
            break;    
        case "MI2":
            opcionTurnoSeleccionado = diasTurnos[2] + " " + horasTurnos[1]
            break;
        case "JU1":
            opcionTurnoSeleccionado = diasTurnos[3] + " " + horasTurnos[0]
            break;
        case "JU2":
            opcionTurnoSeleccionado = diasTurnos[3] + " " + horasTurnos[1]
            break;    
        case "VI1":
            opcionTurnoSeleccionado = diasTurnos[4] + " " + horasTurnos[0]
            break; 
        case "VI2":
            opcionTurnoSeleccionado = diasTurnos[4] + " " + horasTurnos[1]
            break;    
        case "SA":
            opcionTurnoSeleccionado = diasTurnos[5] + " " + horasTurnos[0]
            break; 
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

IngresoDatosCliente()

opcionReparacionSeleccionada= prompt(`
SELECCIONE EL TIPO DE SERVICIO/REPARACION:

1: ${objServicio1.detalleServicio}
2: ${objServicio2.detalleServicio}
3: ${objServicio3.detalleServicio}
4: ${objServicio4.detalleServicio}
5: ${objServicio5.detalleServicio}
6: ${objServicio6.detalleServicio}
7: ${objServicio7.detalleServicio}
`)

while (opcionReparacionSeleccionada > 7) {
    ValidarSeleccionReparacion()    
    opcionReparacionSeleccionada = prompt(`
    SELECCIONE UN TIPO DE SERVICIO/REPARACION VALIDO:

    1: ${objServicio1.detalleServicio}
    2: ${objServicio2.detalleServicio}
    3: ${objServicio3.detalleServicio}
    4: ${objServicio4.detalleServicio}
    5: ${objServicio5.detalleServicio}
    6: ${objServicio6.detalleServicio}
    7: ${objServicio7.detalleServicio}
    `)
}

ValidarSeleccionReparacion()

opcionTurnoSeleccionado = prompt(`
SELECCIONE UN TURNO:

LU1: ${diasTurnos[0]} ${horasTurnos[0]}
LU2: ${diasTurnos[0]} ${horasTurnos[1]}
MA1: ${diasTurnos[1]} ${horasTurnos[0]}
MA2: ${diasTurnos[1]} ${horasTurnos[1]}
MI1: ${diasTurnos[2]} ${horasTurnos[0]}
MI2: ${diasTurnos[2]} ${horasTurnos[1]}
JU1: ${diasTurnos[3]} ${horasTurnos[0]}
JU2: ${diasTurnos[3]} ${horasTurnos[1]}
VI1: ${diasTurnos[4]} ${horasTurnos[0]}
VI2: ${diasTurnos[4]} ${horasTurnos[1]}
SA: ${diasTurnos[5]} ${horasTurnos[0]}
`)

while ((opcionTurnoSeleccionado != "LU1") && (opcionTurnoSeleccionado != "LU2") && (opcionTurnoSeleccionado != "MA1") && (opcionTurnoSeleccionado != "MA2") && (opcionTurnoSeleccionado != "MI1") && (opcionTurnoSeleccionado != "MI2") && (opcionTurnoSeleccionado != "JU1") && (opcionTurnoSeleccionado != "JU2") && (opcionTurnoSeleccionado != "VI1") && (opcionTurnoSeleccionado != "VI2") && (opcionTurnoSeleccionado != "SA")) {
    ValidarSeleccionTurno()    
    opcionTurnoSeleccionado = prompt(`
    SELECCIONE UN TURNO CORRECTO:

    LU1: ${diasTurnos[0]} ${horasTurnos[0]}
LU2: ${diasTurnos[0]} ${horasTurnos[1]}
MA1: ${diasTurnos[1]} ${horasTurnos[0]}
MA2: ${diasTurnos[1]} ${horasTurnos[1]}
MI1: ${diasTurnos[2]} ${horasTurnos[0]}
MI2: ${diasTurnos[2]} ${horasTurnos[1]}
JU1: ${diasTurnos[3]} ${horasTurnos[0]}
JU2: ${diasTurnos[3]} ${horasTurnos[1]}
VI1: ${diasTurnos[4]} ${horasTurnos[0]}
VI2: ${diasTurnos[4]} ${horasTurnos[1]}
SA: ${diasTurnos[5]} ${horasTurnos[0]}
    `)
}

ValidarSeleccionTurno()

alert(`Sr./Sra. ${objCliente.nombreCliente} reservó turno 
    para el  (${opcionTurnoSeleccionado}). Tipo de servicio
    reparacion (${opcionReparacionSeleccionada}) (${detalleReparacionSeleccionada})
    `)
    