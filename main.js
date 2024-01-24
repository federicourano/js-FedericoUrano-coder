//Simulador de carga de datos de alumnos

let nombre;
let apellido;
let comision;
let nota1;
let nota2;
let nota3;
let promedio;

const alumnos = [];


class Alumno {
    constructor(nombre, apellido, comision, nota1, nota2, nota3, promedio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.comision = comision;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.promedio = promedio;
    }
}

function agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3, promedio) {
    let agregar = new Alumno(nombre, apellido, comision, nota1, nota2, nota3, promedio)
    alumnos.push(agregar);


}


function nuevoAlumno() {
    agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3, promedio);
}


function mostrarTodo() {
    let mostrar = [];
    const mostrar2 = [localStorage.getItem("alumnos")];
    console.log(JSON.parse(mostrar2));

    alumnos.forEach(alumno => {
        mostrar.push(`<br/>Nombre: ${alumno.nombre} ${alumno.apellido} | Comision: ${alumno.comision} | Notas: ${alumno.nota1}, ${alumno.nota2}, ${alumno.nota3} | Promedio: ${alumno.promedio}`)
    })

    let cosas = document.getElementById("cosas");
    cosas.innerHTML = (`Alumnos totales y sus respectivos promedios y notas: <br/>
    ${JSON.parse(mostrar2)} <br/>`);
}

function limpiar() {
    let cosas = document.getElementById("cosas");
    cosas.innerHTML = "";
}
let MostrarAlumnos = document.getElementById("mostrar-todo");
let Limpiar = document.getElementById("limpiar");
MostrarAlumnos.addEventListener("click", mostrarTodo);
Limpiar.addEventListener("click", limpiar)
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    if (inputs[1].value != "" && inputs[3].value != "" 
        && inputs[5].value != "" && inputs[7].value != ""
        && inputs[9].value != "" && inputs[11].value != ""
        && inputs[13].value != ""); {
        let nombretest = inputs[1].value;
        let apellidotest = inputs[3].value;
        let comisiontest = inputs[5].value;
        let nota1test = inputs[7].value;
        let nota2test = inputs[9].value;
        let nota3test = inputs[11].value;
        let promediotest = inputs[13].value;
        agregarAlumno(nombretest, apellidotest, comisiontest, nota1test, nota2test, nota3test, promediotest);
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
        mostrarTodo()
    }
});
