//Una forma de hacerlo
let añoBaseLuna = 2017;
for (let i = 1; i <= 15; i++) {
    let aumentador = 3;

    añoBaseLuna = añoBaseLuna + aumentador;

    console.log(
        `La proxima luna de Cazador será el 5 de ocubre del año ${añoBaseLuna}`
    );
}

//otra forma de hacerlo(Es lo mismo, escrito de otra forma)

let añoBaseLuna = 2017;
for (let i = 1; i <= 15; i++) {
    añoBaseLuna += 3;

    console.log(
        `La proxima luna de Cazador será el 5 de ocubre del año ${añoBaseLuna}`
    );
}