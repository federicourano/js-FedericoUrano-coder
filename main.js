
//Simulador de carga de datos de alumnos


let nombre;
let apellido;
let comision;
let nota1;
let nota2;
let nota3;
let promedio;


const alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];


class Alumno {
    constructor(nombre, apellido, comision, nota1, nota2, nota3){
        this.nombre = nombre;
        this.apellido = apellido;
        this.comision = comision;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.promedio = (nota1 + nota2 + nota3) / 3;
    }
}

function agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Alumno Agregado",
        showConfirmButton: false,
        timer: 1500
      });
    let agregar = new Alumno(nombre, apellido, comision, nota1, nota2, nota3)
    alumnos.push(agregar);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    formulario.reset();

}


function nuevoAlumno() {
    agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3, promedio);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
}


function mostrarTodo() {
    const alumnosGuardados = JSON.parse(localStorage.getItem("alumnos")) || [];
    let mostrar = [];

    alumnosGuardados.forEach(alumno => {
        mostrar.push(`<br/>Nombre: ${alumno.nombre} ${alumno.apellido} | Comision: ${alumno.comision} | Notas: ${alumno.nota1}, ${alumno.nota2}, ${alumno.nota3} | Promedio: ${alumno.promedio}`);
    });

    let cosas = document.getElementById("cosas");
    cosas.innerHTML = (`Alumnos totales y sus respectivos promedios y notas: <br/> ${mostrar.join('')}`);
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
let agregarAlumnoBtn = document.getElementById("agregar-alumno");

agregarAlumnoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputs = formulario.children;
    if (
        inputs[1].value != "" &&
        inputs[3].value != "" &&
        inputs[5].value != "" &&
        inputs[7].value != "" &&
        inputs[9].value != "" &&
        inputs[11].value != ""
    ) {
        let nombretest = inputs[1].value;
        let apellidotest = inputs[3].value;
        let comisiontest = inputs[5].value;
        let nota1test = parseFloat(inputs[7].value);
        let nota2test = parseFloat(inputs[9].value);
        let nota3test = parseFloat(inputs[11].value);
        agregarAlumno(nombretest, apellidotest, comisiontest, nota1test, nota2test, nota3test);
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
        mostrarTodo();
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Datos incorrectos o formulario incompleto",
          });
        formulario.reset();
    }
});
