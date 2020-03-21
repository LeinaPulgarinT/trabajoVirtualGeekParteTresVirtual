//objeto geekGirl1
const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',

};

//una forma de hacerlo, es capturando la etiqueta p
const p = document.getElementById('uno').innerHTML = `Mi name es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.profession}`;

//otra forma de hacerlo es con document.write
// document.write(`Mi nombre es ${geekGirl1.name}, y tengo ${geekGirl1.age} años y soy ${geekGirl1.profession}`);


//objeto geekGirl2
const geekGirl2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actríz',

};

const objetoDos = document.getElementById('objetoDos').innerHTML = `${geekGirl2.name}, ${geekGirl2.age},${geekGirl2.profession}`

// document.write(`${geekGirl2.name},  ${geekGirl2.age}  ${geekGirl2.profession}\n `);