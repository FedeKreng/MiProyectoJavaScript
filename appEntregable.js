alert("Bienvenido a HLGym Fitness&Lifestyle")
alert("Complete el siguiente formulario para registrarse")

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let nombreCompleto = " Nombre: " + nombre + " " + " Apellido: " + apellido
console.log(nombreCompleto)

let fechaNac = prompt("Ingrese su fecha de nacimiento")
let fechaNacDato = " Fecha de nacimiento: " + fechaNac
console.log(fechaNacDato)

let altura = prompt("Ingrese su altura")
let alturaDato = " Altura: " + altura
console.log(alturaDato)

let peso = prompt("Ingrese su peso")
let pedoDato = " Peso: " + peso
console.log(pedoDato)

let preexistencias = prompt("Declare si tiene alguna patología preexistente")
let preexistenciasDato = " Patologías preexistentes: " + preexistencias
console.log(preexistenciasDato)

let option = prompt(`Elija su nacionalidad:
1: Argentina
2: Chile
3: Uruguay
4: Paraguay
5: Perú
6: Bolivia
7: Ecuador
8: México
9: Panamá
10: Colombia
`);

switch (option){
    case "1":
        console.log("Argentina");
        break;
    case "2":
        console.log("Chile");
        break;
    case "3":
        console.log("Uruguay");
        break;
    case "4":
        console.log("Paraguay");
        break;
    case "5":
        console.log("Perú");
        break;
    case "6":
        console.log("Bolivia");
        break;
    case "7":
        console.log("Ecuador");
        break;
    case "8":
        console.log("México");
        break;
    case "9":
        console.log("Panamá");
        break;
    case "10":
        console.log("Colombia");
        break;
    default:
        let nacionalidadDistinta = prompt("Ingrese su nacionalidad")
console.log(nacionalidadDistinta)
        break;
}

function solicitarActividad() {
    let actividad = prompt("Ingrese que actividades desea llevar a cabo")
    console.log(`La actividad escogida es: ${actividad}`)
}
solicitarActividad()

let optionAct = prompt(`Elija su plan para proceder al pago:
1: Plan básico
2: Plan Fit
3: Plan Overheat
`);

switch (optionAct){
    case "1":
        console.log("Plan Básico");
        break;
    case "2":
        console.log("Plan Fit");
        break;
    case "3":
        console.log("Plan Overheat");
        break;    
    default:
        break;
}


