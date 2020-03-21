//Encapsulo el array en una funcion
const workWithMovies = () => {
    const movies = ["origenes", "los fantasmas de goya", "el pianista"];

    //Agregamos una pelicula mas al array
    movies[3] = "el retrato de dorian gray";
    console.log(movies);

    //Modifico la pelicula en la posicion 3
    movies[3] = "interestelar";
    console.log(movies);

    //Nuevamente modifico el array, quitando la pelicula que menos me sirve
    movies[0] = "el rey león";
    console.log(movies);
};

//Ejecuto la funcion
workWithMovies();