//objeto geekGirl1
const geekGirl1 = {
    name: 'María',
    age: 34,
    profession: 'periodista',
};

geekGirl1.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession;
};

console.log(geekGirl1.showBio());


// geekGirl1.showBio = () => {
//         return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}`;
//     }
// `, y tengo ` + this.age; +
// ` y soy ` + this.profession;


//objeto geekGirl1
const geekGirl2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actríz',

};

geekGirl2.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession;
};

console.log(geekGirl2.showBio());