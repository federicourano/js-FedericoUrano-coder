// CALCULADORA DE PROMEDIOS CON 3 NOTAS

let cantidad = Number(prompt("Ingrese la cantidad de alumnos a calcular su promedio: "))

function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 +nota3) / 3;
    return promedio
}

if (isNaN(cantidad)){
    alert("No se ingreso un numero, intente de nuevo");
} else {
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    for (let i = 1; i <= cantidad; i++) {
        nota1 = Number(prompt("Ingrese la nota 1: "));
        nota2 = Number(prompt("Ingrese la nota 2: "));
        nota3 = Number(prompt("Ingrese la nota 3: "));
        let promediofinal = calcularPromedio(nota1, nota2, nota3);
        if (promediofinal > 6 || promediofinal === 6){
            alert(`El promedio del alumno ${i} es de ${promediofinal}, esta aprobado`);
        }
        if (promediofinal < 6){
            alert(`El promedio del alumno ${i} es de ${promediofinal}, esta desaprobado`);
        }
    }
}