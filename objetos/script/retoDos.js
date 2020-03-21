const geekGirl1 = {
    name: "Susana",
    age: 34,
    profession: "periodista"
};

geekGirl1.run = phrase => `Estoy ${phrase}`;
console.log(geekGirl1.run("corriendo"));

geekGirl1.runAMarathon = distance =>
    `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(geekGirl1.runAMarathon(50));