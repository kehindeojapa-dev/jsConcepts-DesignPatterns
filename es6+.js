//OLD JAVASCRIPT

    // var names = ['Ed', 'John', 'Mike'];

    // var counter = 10;

    // var counter = 5;
    // //var issues with declaration and scoping.
    // function sayName() {
    //     var name = 'Kenny';
    //     console.log(name);
    // }
    // console.log(name);
    // sayName();

    //concatenation
    // var name = 'Kenny';
    // console.log('Hello my name is '+name);

    //Object Literals
    // function getBook(title, author) {
    //     return {
    //         title: title,
    //         author: author
    //     }
    // }

    // var book = getBook('Harry Potter', 'JK');
    // console.log(book);


    // //Object Destructuring
    // var user = {
    //     name: 'Kehinde',
    //     age: 25
    // }
    // var myName = user.name;
    // console.log(myName);


    // Arrow function
    // function sayName() {
    //     console.log('Hello, i am Kenny');
    // }

    // var sayAge = function() {
    //     console.log('My age is 22');
    // }
    // sayName();
    // sayAge();


    // //this
    // var user = {
    //     name: 'Kenny',
    //     age: 22,
    //     sayName: function() {
    //         console.log("My name is " +this.name);
    //         var that = this;
    //         var fullName = function() {
    //             console.log("My name is " + that.name + " and my age is " +that.age);
    //         }
    //         fullName();
    //     }
    // }
    // user.sayName();

    
    //default parameter
    // function multiply(x,y) {
    //     var a = x || 1;
    //     var b = y || 1;
    //     console.log(a*b);
    // }
    // multiply(0,0);


    //Constructor Function
    // function Person(name, age, sex) {
    //     this.name = name;
    //     this.age = age;
    //     this.sex = sex; 
    // }
    // Person.prototype.sayAge = function() {
    //     console.log("I am " +this.age+ " years old");
    // }
    // // var Taiye = new Person('Taiye', 22, 'male');
    // // console.log(Taiye);
    // // Taiye.sayAge();

    // function Kenny(occupation, hobbies, name, age, sex) {
    // Person.call(this, name,age,sex); 
    //     this.occupation = occupation;
    //     this.hobbies = hobbies;
    // }
    // Kenny.prototype = Object.create(Person.prototype);
    // const newKenny = new Kenny('software engineer', 'playing video-games', 'kenny', '22', 'male');
    // console.log(newKenny);

    //CALLBACKS
    // function getData(data, callback) {
    //     setTimeout(() => {
    //         console.log('reading from the database')
    //         callback({ data:data });
    //     }, 4000);
    // }
    // getData(5, function(data){
    //     console.log(data);
    // })
/**
 *  ES6+
 */



// let,const

// const todoList = ['Milk', 'Cow'];
// todoList = ['Milk'];
// let counters = 10;
// counters = 5

//scoping

// {
//     let myName = 'Kehinde';
// }
// console.log(myName); //error: myName isn't defined.

//concatenation
// const name = 'Kenny';
// const age = 22;
// console.log(`My name is ${name}, aged ${age} years old`);

//Object Literals
// function getBook(title, author) {
//     return {
//         title,
//         author
//     }
// }

// let book = getBook('Harry Potter', 'JK');
// console.log(book);


//Object Destructuring
// const user = {
//     name: 'Kehinde',
//     age: 25
// }
// const {name} = user;
// console.log(name);


// Arrow function
    // const sayName = () => console.log('Hello, i am Kenny');


    // const sayAge = age => console.log(`My age is ${age}`);

    // sayName();
    // sayAge(30);


    // //this
    // const user = {
    //     name: 'Kenny',
    //     age: 22,
    //     sayName: function() {
    //         console.log(`My name is ${this.name}`);
    //         const fullName = () => console.log(`My name is ${this.name} and my age is ${this.age}`);
    //         fullName();
    //     }
    // }
    // user.sayName();

    
    //default parameter
    // const multiply = (x = 1,y = 1) => {
    //     console.log(x * y);
    // };

    // multiply(90,1);


    //New Array Functions
    // const shoppingList = ['Milk', 'Cow', 'Eggs', 'Chocolate'];

    //forEach
    // shoppingList.forEach((item) => {
    //     console.log(item);
    // });
    // shoppingList.forEach((item, index) => {
    //     console.log(`(${index +1}) item`);
    // });


    // //Map
    // const doneList = shoppingList.map(item=> item + " done");
    // console.log(doneList);

    // //Filter
    // const filterList = shoppingList.filter(item => {
    //     return item !== "Cow";
    // })
    // console.log(filterList);


//Constructor Functions

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
// console.log(student1.sayDiscipline());


// Promises


    // for Resolve
// const prom = new Promise((resolve,reject) => {
//     //Here is async
//     setTimeout(() => {
//         resolve({
//             user: 'Kehinde',
//             password: '5013'
//         });
//         reject(new Error("Something went wrong"));
//     }, 3000);
// });

// prom
//     .then(data => {
//         console.log(data);
//     });



//     // for Reject
// const prom = new Promise((resolve,reject) => {
//     //Here is async
//     setTimeout(() => {
//         reject(new Error("Something went wrong"));
//     }, 3000);
// });

// prom
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));



/**
 * ES7
 */

// // includes
// const pets = ['cat', 'dog', 'bat']
// console.log(pets.includes('cat'));

// //exponential
// const square = (x) => x**2;
// const cube = (y) => y**3; 


/**
 * ES8
 */

//padStart and padEnd
// console.log('Vowel'.padStart(10));
// console.log('Vowel'.padEnd(10));

//Object(values, entries, keys)

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch',
}

// console.log(Object.values(obj));

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})