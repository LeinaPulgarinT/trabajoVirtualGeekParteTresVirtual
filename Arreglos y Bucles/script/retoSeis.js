//guardo en una constante los elementos html que necesito
const viewArray = () => {
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName("inputText"),
        namesValues = [].map.call(inputsValues, dataInput => {
            arrayInput.push(dataInput.value);
        });

    for (const obra of arrayInput) {
        alert(
            `¡A mí también me encantó "${obra}"! Tenemos mucho en común, humana.`
        );
    }
    // OTRA FORMA DE RECORER EL ARREGLO CON forEach:

    //     arrayInput.forEach(inputsValuesData => {
    //         console.log(
    //             `¡A mí también me encantó "${inputsValuesData}"! Tenemos mucho en común, humana.`
    //         );
    //     });
    // };

    //
};

///retiro los eventos que trae el boton por defecto
const boton = document.getElementsByClassName("boton");
document.addEventListener("click", e => {
    e.preventDefault();
});

//BORRADOR
// var firstFavorite = document.getElementById("firstFavorite");

// const inputUno=()
// firstFavorite.addEventListener("keyup", e => {
//     console.log(e.target);
// });
// const secondFavorite = document.getElementById("secondFavorite");
// const button = document.getElementById("button");

// firstFavorite.addEventListener("keyup", e => {
//     console.log("Estas haciendo foco en el input");
//     console.log(e.path[0].value);
// });
// secondFavorite.addEventListener("focus", () =>
//     console.log("Estas haciendo foco en el input")
// );
// button.addEventListener("click", () => {
//     event.preventDefault();
//     console.log("Estas precionando el boton enviar");
//     console.log(capturado);
// });
// continuar