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

const Alumnos =[
    {nombre: "Federico", apellido: "Urano", comision: "49825", nota1: 8, nota2: 10, nota3: 9, promedio: 9},
    {nombre: "Jose Luis", apellido: "Martinez", comision: "49825", nota1: 6, nota2: 6, nota3: 6, promedio: 6}
]

function agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3, promedio) {
    let agregar = new Alumno(nombre, apellido, comision, nota1, nota2, nota3, promedio)
    alumnos.push(agregar);
}

Alumnos.forEach(alumno => {
    agregarAlumno(alumno.nombre, alumno.apellido, alumno.comision, 
        alumno.nota1, alumno.nota2, alumno.nota3, alumno.promedio)
})

function nuevoAlumno() {
    nombre = (prompt("Ingrese el nombre del alumno: "));
    apellido = (prompt("Ingrese el apellido del alumno: "));
    comision = (prompt("Ingrese la comision del alumno: "));
    nota1 = (prompt("Ingrese la nota 1 del alumno: "));
    nota2 = (prompt("Ingrese la nota 2 del alumno: "));
    nota3 = (prompt("Ingrese la nota 3 del alumno: "));
    promedio = (prompt("Ingrese el promedio del alumno: "));

    agregarAlumno(nombre, apellido, comision, nota1, nota2, nota3, promedio);

    menu();
}

function mostrarTodo() {
    let mostrar = []

    alumnos.forEach(alumno => {
        mostrar.push(`\nNombre: ${alumno.nombre} ${alumno.apellido} | Comision: ${alumno.comision} | Notas: ${alumno.nota1} ${alumno.nota2} ${alumno.nota3} | Promedio: ${alumno.promedio}`)
    })

    alert(`Alumnos totales y sus respectivos promedios y notas:
    ${mostrar}`);

    menu();
}

function menu() {
    let selector = Number(prompt(` Bienvenido al registro y seguimiento de alumnos
    Seleccione una opcion para continuar

    1 = Agregar alumno nuevo
    2 = Mostrar todos los alumnos
    `))

    switch (selector) {
        case 1:
            nuevoAlumno();
            break;

        case 2:
            mostrarTodo();
            break;

        default:
            alert('Seleccione una opcion valida del menu');
            menu();
    }
}

menu();