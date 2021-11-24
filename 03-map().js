// Método map() - INMUTABLE

// El método map() sirve para "transformar" los elementos de un array.

const letters = ['a', 'b', 'c'];
const lettersB = [];

for (let i = 0; i < letters.length; i++) {
    const elem = letters[i];
    lettersB.push(elem + elem);    
}

console.log(lettersB); // resultado esperado: ['aa', 'bb', 'cc']

const lettersC = letters.map(item => item+item);

console.log(lettersC); // resultado esperado: ['aa', 'bb', 'cc']

/* Este método siempre va a arrojar, luego de su implementación, la misma cantidad
de elementos que el array original, ni más ni menos. */

////////////////////////////////////////////////////////////////////////////////////////////////////

// map() y Objetos

/* Si bien se especifica que el método map() es de caracter INMUTABLE, puede que al
momento de trabajar con objetos este método no nos otorgue el resultado que esperamos. */

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

/*    const datos2 = datos.map(dato => {
        dato.pariente = 'sí';
        return dato;
    });

    console.log('original',datos);
    console.log('agregado',datos2); */

/* Al ejecutar este pedazo de código (datos2 y console.log's), nos damos cuenta 
que nuestro array original se ve modificado. Pero esto no quiere decir que el método map() 
se convierta en mutable, sino que el procedimiento que estamos manejando no es del todo correcto.

Si analizamos bien los resultados, vemos que el array original constaba de 5 objetos, y
luego de utilizar map() seguimos contando con 5 objetos. El problema se presentó al modificar
internamente los objetos al momento de retornar el resultado dentro del mismo método.

Para evitar este inconveniente, lo que debemos hacer es lo siguiente: */

const datos3 = datos.map(dato => {
    return {
        ...dato,
        parientes: 'sí'
    }
});

/* De esta forma, accederemos a los objetos dentro del array sin modificarlos, y mediante el
método map() crearemos un nuevo array, con objetos que hacen referencia al mismo espacio en
memoria que el array 'datos', y le agregaremos a cada uno la propiedad 'parientes'. */

console.log('original',datos);
console.log('agregado',datos3);

////////////////////////////////////////////////////////////////////////////////////////////////////