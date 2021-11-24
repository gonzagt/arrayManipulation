// Método map() - INMUTABLE

// El método map sirve para "transformar" los elementos de un array.

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
