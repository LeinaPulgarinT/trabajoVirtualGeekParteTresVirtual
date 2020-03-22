const numbers = [5, 6, 2, 1, 7];
let acumulador = 0;
let promedio;
numbers[5] = 9;
const average = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        acumulador += numbers[i];
        promedio = acumulador / numbers.length;
    }

    return promedio;
};
//Compruebo de que la funcion me sirva para cualquier tipo de array,
average([10, 15, 20]);
average([100, 5000, 668696]); //Efectivamente si funciona para todo tipo de array

//OTRA FORMA DE CALCULAR EL PROMEDIO DE UN ARRAY SIN BUCLE Y CON METODO REDUCE:

let numbers = [5, 6, 2, 1, 7];
numbers[5] = 9;
const average = numbers.reduce(function(contador, numero) {
    return contador + numero;
}, 0);

let promedio = average / numbers.length;
console.log(promedio);