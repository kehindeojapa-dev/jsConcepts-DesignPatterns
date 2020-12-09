

// closures 

// const first = () => {
//     const greet = 'Hi';
//     const second = () => {alert(greet);}
//     return second();
// }

// const newFunc = first;
// newFunc();


// Currying

// const multiply = (a,b) => a*b;
// const curriedMultiply = (a) => (b) => a*b;
// const multiplyBy5 = curriedMultiply(5);
// curriedMultiply(5)(10) or multiplyBy5(10)


//compose

// const compose = (f,g,h) => (a,b) => f(g(h(a, b)));
// const sum = (num1, num2) => num1 + num2;
// const sub = (num1) => num1 - 10;
// const mult = (num1) => num1 * 6;

// console.log(compose(mult, sub,sum)(5,10));
// result: 30

// How Javascript Works

//MEMORY HEAP
// const a = 1; //memory heap
// const b = 10;
// const c = 100;
// //this variables creates memory for itself,
// //if its not cleaned up, it can lead to 
// //memory leak. this is when the memory heap is full


//CALL STACK

// console.log('1')    //enters first, executes it, and removes it
// console.log('2')    //this enter nexts, execute it and removes it
// console.log('3')    //same goes for this


// const one = () => {
//     const two = () => {
//         console.log('4');
//     }
//     two();
// }


// console.log('4') //execute it and remove it
// two()   //this is removed;
// one()   //this is removed;
// //Call Stack


// Asynchronous
//call stack
// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 4000);
// console.log('3');



//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP


/**
    The JS way
    functional Programming
 */

const movieList = [
    {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
    },
    {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
    },
    {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
    },
    {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
    },
    {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
    },
    {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
    },
    {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
    }
];

//Title for batman movies with rating of 7 and above
// const titles = []
// movieList.forEach(movie => {
//     if(movie.imdbRating >= 7.0) {
//         titles.push(movie.title);
//     };
// })
// console.log(titles);


//Only Joel Schumacher batman movie;
// const SchumacherMovieList = [];
// movieList.forEach(movie => {
//     if(movie.director == "Joel Schumacher") {
//         SchumacherMovieList.push(movie);
//     }
// });
// console.log(SchumacherMovieList);


//Splitting above code into function
// const SchumacherMovieList = () => {
//     const SchumacherMovieList = [];
//     movieList.forEach(movie => {
//         if(movie.director == "Joel Schumacher") {
//             SchumacherMovieList.push(movie);
//         }
//     });
//     return SchumacherMovieList;
// }


//make above code a pure function
// const schumacherMovieList = (movies) => {
//     const schumacherMovieList = [];
//     movies.forEach(movie => {
//         if(movie.director == "Joel Schumacher"){
//             schumacherMovieList.push(movie);
//         }
//     });
//     return schumacherMovieList;
// }


//Use map to return all titles in the movieList
// const titles = movies => {
//     return movies.map(movie => movie.title);
// }


//Use filter to check for nolan movies
// const nolanList = movies => {
//     return movies.filter(movie => movie.director == "Christopher Nolan");
// }


//Use map and filter to check for best titles
// const bestTitles = movies => {
//     return movies.filter(movie => movie.imdbRating >= 8.0).map(movie => movie.title);
// }


//Use map,filter,reduce to check for average Nolan ratings
// const avgRatingNolanMovies = movies => {
//     ratingSum = movies.filter(movie => movie.director == 'Christopher Nolan').reduce((acc, movie) => acc + movie.imdbRating, 0);
//     nolanList = movies.filter(movie => movie.director == 'Christopher Nolan');
//     avgRating = ratingSum / (nolanList.length)
//     return avgRating;
// }


//Average movie rating for Joel Schumacher batman movie;
// let ratingSum = 0;
// let averageRating = 0;
// SchumacherMovieList.forEach(movie => {
//     ratingSum += movie.imdbRating;
// });
// averageRating = ratingSum / (SchumacherMovieList.length);
// console.log(averageRating.toFixed(1));



//Coding Problems

// TODO: Make an array of the titles of movies released before 2000
// const moviesB4the2000s = movies => {
//     movieB4 = movies.filter(movie => movie.year < 2000).map(movie => movie.title);
//     return movieB4;
// }

// const moviesBefore2000 = moviesB4the2000s(movieList);
// console.log(moviesBefore2000);

//TODO: Complete the following program to compute and show the names of political forms ending with "cy".

// const governmentForms = [
//     {
//     name: "Plutocracy",
//     definition: "Rule by the wealthy"
//     },
//     {
//     name: "Oligarchy",
//     definition: "Rule by a small number of people"
//     },
//     {
//     name: "Kleptocracy",
//     definition: "Rule by the thieves"
//     },
//     {
//     name: "Theocracy",
//     definition: "Rule by a religious elite"
//     },
//     {
//     name: "Democracy",
//     definition: "Rule by the people"
//     },
//     {
//     name: "Autocracy",
//     definition: "Rule by a single person"
//     }
// ];

// const formsEndWithCy = forms => {
//     let holdCyForms = [];
//     const cyFormat = 'cy';
//     forms.forEach(form => {
//         let containCy = form.name.substring(form.name.length-2,form.name.lenght);
//         if (containCy == cyFormat) {
//             holdCyForms.push(form.name)
//         }
//     });
//     return holdCyForms;
// }
// formsEndingWithCy = formsEndWithCy(governmentForms);


//Arrays Sum

// const arrays = [[1, 4], [11], [3, 5, 7]];
// // TODO: compute the value of the arraysSum variable

// const arraySum = array => {
//     holder = [];
//     let counter = 0;
//     array.forEach(item => {
//         const eachArray = item.reduce((acc, value) => acc + value, 0);
//         holder.push(eachArray);
//     })
//     holder.forEach(item => {
//         counter +=item
//     });
//     return counter;
// }
// console.log(arraySum(arrays));


// Student Results

const students = [
    {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
    },
    {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
    },
    {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
    },
    {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
    }
];
    
// Compute female student results
// const femaleStudentsResults = [];
// for (const student of students) {
//     if (student.sex === "f") {
//         let gradesSum = 0;
//         for (const grade of student.grades) {
//         gradesSum += grade;
//     }
//     const averageGrade = gradesSum / student.grades.length;
//     femaleStudentsResults.push({
//         name: student.name,
//         avgGrade: averageGrade
//     });
//     }
// }


//Refactor above code with functional programming
// const femaleStudResult = studentsData => {
//     let holder1 = [];
//     let femaleStuds = studentsData.filter(students => students.sex == "f");
//     femaleStuds.forEach(stud => {
//         let femaleGrade = (stud.grades).reduce((acc, value) => acc + value, 0);
//         let avgGrade = femaleGrade/stud.grades.length;
//         holder1.push({
//             name: stud.name,
//             avgGrade: avgGrade
//         })
//     })
//     return holder1;
// }

// const femaleStudentsResults = femaleStudResult(students);
console.log(femaleStudentsResults);