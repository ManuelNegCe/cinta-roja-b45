let informacion = [
    {
        nombre: 'Marco', 
        sueldo: 1000
    }, 
    {
        nombre: 'Diana', 
        sueldo: 40000
    }, 
    {
        nombre: 'Ana', 
        sueldo: 6000000
    }, 
    {
        nombre: 'Daniel', 
        sueldo: 10000
    }
];


//iterar con un for
for(let i = 0; i < informacion.length; i++) {
    console.log(`nombre: ${informacion[i].nombre}, sueldo: ${informacion[i].sueldo}`);
}

//iterar con forEach
//callback(elementoActual, posicion, arregloCompleto)
// informacion.forEach(elementoActual => 
//     console.log(`nombre: ${elementoActual.nombre}, sueldo: ${elementoActual.sueldo}`)
// )

let nombres = ['Ana', 'Hiromi', 'Diego', 'Ernesto', 'Jorge'];
let edades = [1, 6, 7, 20, 31];

nombres.forEach((elementoActual, index, array) => {
    console.log(index, elementoActual, array);
})

nombres.forEach((elementoActual, index) => {
    console.log(index, elementoActual);
})

nombres.forEach((elementoActual) => {
    console.log(elementoActual);
})


//ITERAR UN ARREGLO Y MOSTRAR SUS ELEMENTOS

nombres.forEach(elementoActual => {
    console.log(elementoActual);
})

edades.forEach(a => {
    console.log(`edad: ${a}`)
})

let paises = ['México', 'Canada', 'USA'];

paises.forEach(pais => {
    console.log(pais);
})

let figuras = ['circulo', 'triángulo', 'rectángulo', 'hexágono'];

figuras.forEach(figura => {
    console.log(`La figura es: ${figura}`)
})

let imagenes = ['imagen1', 'imagen2', 'imagen3'];


imagenes.forEach(imagen => {
    console.log(`La imagen mostrada es: ${imagen}`);
})


//MAP 
//iterar arreglos
//crear arreglos nuevos con el retorno del map


let numeros = [3, 10, 5, 8, 20];

let numerosDuplicados = numeros.map((numero, i, arr) => {
    console.log(numero);
    return numero * 2;
})

let numerosNuevo = numerosDuplicados.map(numDup => {
    return `Numero: ${numDup}`;
})

console.log('numeros', numeros);
console.log('numerosDuplicados', numerosDuplicados);
console.log('numerosNuevo', numerosNuevo);

//CONSTRUIR UN ARREGLO BASADO EN UN ARREGLO BASE
let a = ['22 - 0', '15 - 1', '10 -2', '12 -3', '8 - 4'];

let array = [22, 15, 10, 12, 8];


// let numerosDuplicados = numeros.map((numero, i, arr) => {
//     console.log(numero);
// })
// numeros.map((numero, i)=> {
//     console.log(numero);
// })

// numeros.map((numero) => {
//     console.log(numero);
// })

// numeros.map(numero => {
//     console.log(numero);
// })