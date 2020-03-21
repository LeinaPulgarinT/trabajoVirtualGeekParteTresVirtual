//Declaro la variable acc y le asigno el valor
let acc = 0;

for (let i = 0; i < 10; i = i + 2) {
    acc = acc + i;
}

//imprimo en consola el resultado final del bucle.
console.log(`El resultado es: ${acc}`);