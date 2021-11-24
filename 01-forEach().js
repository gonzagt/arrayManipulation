// Creamos nuestro array básico con solo 3 elementos de tipo string:

const letters = ['a', 'b', 'c'];

// Con un ciclo for, esto se vería así:

for (let i = 0; i < letters.length; i++) {
    const item = letters[i];
    console.log('for ',item)
};

// Utilizando el método forEach:

letters.forEach(item => console.log('forEach', item));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////