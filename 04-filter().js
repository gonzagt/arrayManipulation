// Método filter() - INMUTABLE

/* El método filter() sirve para filtrar los elementos de un array. Es decir, establecer
una condición y retornar un nuevo array con los elementos que cumplan dicha condición.

Este método puede retornar un array vacío (ningún elemento cumple la condición), un array
con menos elementos que el array original (solo algunos elementos cumplen la condición) o 
un array con la misma cantidad de elementos que el array original (todos sus elementos
cumplen con la condición), pero NUNCA retornará un array con más elementos que el array 
original. */

const palabras = ['saludo', 'vaso', 'reloj', 'computadora', 'ventana'];
const nuevasPalabras = [];

for (let i = 0; i < palabras.length; i++) {
    const item = palabras[i];
    if (item.length > 5) {
        nuevasPalabras.push(item);
    }
};

console.log(nuevasPalabras); // resultado esperado: [ 'saludo', 'computadora', 'ventana' ]

// Aplicando nuestro método filter()

const palabrasFiltradas = palabras.filter(item => item.length > 5); 

console.log(palabrasFiltradas); // resultado esperado: [ 'saludo', 'computadora', 'ventana' ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Otro ejemplo un poquito más complejo y utilizando un array de objetos:

const datos = [
    {
        nombre: 'Gonzalo',
        edad: 28
    },
    {
        nombre: 'Tomás',
        edad: 25
    },
    {
        nombre: 'Rosario',
        edad: 20
    },
    {
        nombre: 'Julieta',
        edad: 18
    },
    {
        nombre: 'Valentín',
        edad: 18
    }
];

const mayorDe21 = datos.filter(item => item.edad > 21);

console.log(mayorDe21); // resultado esperado: [ { nombre: 'Gonzalo', edad: 28 }, { nombre: 'Tomás', edad: 25 } ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////