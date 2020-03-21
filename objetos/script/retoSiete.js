const job = "developer";

const personaje = {
    firstName: "leina",
    lastName: "pulgarin",
    age: 22,
    job: job
};

//compruebo en cosola que cada una de las propiedades si me funcione corrcatamente
console.log(personaje.firstName);
// console.log(personaje.lastName);
// console.log(personaje.age);
// console.log(personaje.job);

//cambio en valor de la propiedad firstName, por 'soranlly' y lo guardo en una constante
const cambiarNombre = (personaje.firstName = "soranlly");
console.log(cambiarNombre);

//Aumento la edad en 1
personaje.age = personaje.age + 1;