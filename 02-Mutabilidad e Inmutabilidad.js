/*
                                      MUTABILIDAD E INMUTABILIDAD:

Estos dos conceptos son extremadamente importantes para los próximos métodos que vayamos a ver.

Básicamente, se habla de:
    - MUTABILIDAD: cuando un método modifica el array original.
    - INMUTABILIDAD: cuando un método NO modifica el array original, es decir, crea una "copia" y utiliza
                     este resultado para operar.

Es de suma importancia diferenciar qué metodos son mutables y cuáles son inmutables, porque de esto depende
el resultado de los mismos al momento de operar con ellos.


A tener en cuenta: cuando se utiliza la mutabilidad de un método, lo que se hace es crear una referencia en
memoria a lo que no cambió, y solo crear nuevos espacios en esta para los datos que sí cambiaron.

Por ej., si tenemos el siguiente array:

const array1 = ['a', 'b', 'c']

y utilizamos un método mutable, en donde el resultado sea: 

array1 = ['a', 'b', 'd']

los índices [0] y [1] van a ocupar el mismo espacio en memoria en los 2 arrays (haciendo referencia en el 
segundo a los mismos índices que el primero, mismo espacio en memoria), pero el índice [2] va a ser distinto 
en el segundo array, debido a que su valor es diferente al del primer array (ocupando un nuevo espacio en memoria).

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////