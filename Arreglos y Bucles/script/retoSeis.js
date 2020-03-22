//guardo en una constante los elementos html que necesito
const firstFavorite = document.getElementById("firstFavorite");
const secondFavorite = document.getElementById("secondFavorite");
const button = document.getElementById("button");
// const capturado = document.getElementById("firstFavorite").value;

firstFavorite.addEventListener("focus", () => {
    console.log("Estas haciendo foco en el input");
});
secondFavorite.addEventListener("focus", () => {
    console.log("Estas haciendo foco en el input");
});
button.addEventListener("click", () => {
    event.preventDefault();
    console.log("Estas precionando el boton enviar");
    // console.log(capturado);
});
// continuar