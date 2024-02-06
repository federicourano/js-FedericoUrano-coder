//Simulador de carga de datos de alumnos


let alumnos = [];


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

function cargarAlumnosDesdeJSON() {
    return new Promise((resolve, reject) => {
        fetch('alumnos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo JSON');
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos de alumnos cargados:', data);
                const alumnosCargados = data.map(alumnoData => new Alumno(
                    alumnoData.nombre,
                    alumnoData.apellido,
                    alumnoData.comision,
                    alumnoData.nota1,
                    alumnoData.nota2,
                    alumnoData.nota3
                ));
                resolve(alumnosCargados);
            })
            .catch(error => {
                console.error(error.message);
                reject(error);
            });
    });
}

function guardarAlumnosEnJSON() {
    const jsonData = JSON.stringify(alumnos);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'alumnos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

function agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Alumno Agregado",
        showConfirmButton: false,
        timer: 1500
    });
    let nuevoAlumno = new Alumno(nombre, apellido, comision, nota1, nota2, nota3);
    alumnos.push(nuevoAlumno);
    guardarAlumnosEnJSON();
    formulario.reset();
}

function mostrarTodo() {
    let mostrar = alumnos.map(alumno => {
        return `<br/>Nombre: ${alumno.nombre} ${alumno.apellido} | Comision: ${alumno.comision} | Notas: ${alumno.nota1}, ${alumno.nota2}, ${alumno.nota3} | Promedio: ${alumno.promedio}`;
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
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Cargando datos. Por favor, espere...",
            showConfirmButton: false,
            timer: 3500
          });
        setTimeout(() =>{
            agregarAlumno(nombretest, apellidotest, comisiontest, nota1test, nota2test, nota3test);
            localStorage.setItem("alumnos", JSON.stringify(alumnos));
            mostrarTodo();
        }, 3500)
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

cargarAlumnosDesdeJSON()
    .then(alumnosCargados => {
        console.log('Alumnos cargados correctamente');
        alumnos = alumnosCargados;
    })
    .catch(error => {
        console.error('Error al cargar los alumnos:', error);
    });