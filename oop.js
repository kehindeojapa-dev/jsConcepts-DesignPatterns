// Constructor Functions

// class Person{
//     constructor(name, age, sex){
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//     }
//     sayAge(){
//         console.log(`I am ${this.age} years old`);
//     }
// }

// const person1 = new Person('kenny', '22', 'male');
// console.log(person1);

// class Student extends Person {
//     constructor(name, age, sex, matricNo, discipline) {
//         super(name, age, sex);
//         this.matricNo = matricNo;
//         this.discipline = discipline;
//     }
//     sayDiscipline(){
//         console.log(`I major in ${this.discipline}`);
//     }
// }

// const student1 = new Student('Kenny', '22', 'male', '0268', 'computer-science');
// console.log(student1.sayAge());


/**
 * The JS way book: OOP
 */
// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,
//     // Return the character description
//     describe() {
//     return `${this.name} has ${this.health} health points, ${this
//     .strength} as strength and ${this.xp} XP points`;
//     }
// };

// //Aurora is harmed by an arrow
// aurora.health -= 20;
// //Aurora learns a new skill
// aurora.xp += 40;

// console.log(aurora.describe());

//Turn above code into OOP-style

// class Character {
//     constructor(name, health, strength) {
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//         this.xp = 0;
//     }

//     describe() {
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
//     }
// }

// const aurora = new Character('aurora', 100, 0);
// const glacius = new Character('Glacius', 100, 0);
// aurora.health -=20
// console.log(aurora.describe());
// console.log(glacius.describe());


//Coding time!

// Dogs

// class Dog {
//     constructor (name, species, size) {
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }
//     bark() {
//         if(this.size > 60) {
//             return "Grrr! Grrr!";
//         } else {
//             return "Woof! Woof!";
//         }
//     }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


//Account List
// class Account {
//     constructor (owner) {
//         this.owner = owner;
//         this.balance = 0;
//     }
//     credit(value) {
//         this.balance += value;
//         return this.balance;
//     }
//     describe() {
//         return `owner: ${this.owner}, balance: ${this.balance}`;
//     }
// }

// function createThree(arrays, value) {
//     accountArray = [];
//     arrays.forEach(array => {
//         array = new Account(array);
//         array.credit(value);
//         newAcc = array.describe();
//         accountArray.push(newAcc);
//     })
//     return accountArray;
// }

// console.log(createThree(['Sean', 'Brad', 'George'], 1000))


// Character Inventory