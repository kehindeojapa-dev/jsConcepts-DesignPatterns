// Array Destructuring

// const users = [
//     "Caleb",
//     "Danny",
//     "Joshua"
// ];

// const [user1, user2, user3] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3);


// Retrieving JSON content

// fetch("./movies.json")
//     .then(response => response.json())
//     .then(movies => {
//         movies.forEach(movie => {
//             console.log(movie.title);
//         })
//     })
//     .catch(err =>{
//         console.log('Ooops', err);
//     });
    

// Turning it to async await;

// const getTitle = async function() {
//     const resp = await fetch("./movies.json");
//     const movies = await resp.json();
//     movies.forEach(movie => {
//         console.log(movie.title);
//     })
// }

// getTitle();


//Coding Program
//Language List


// const getLang = async function() {
//     try {
//         var resp = await fetch("./languages.txt");
//     }
//     catch (err) {
//         console.log('Ooops', err)
//     }
//     if(resp.status == 200) {
//         const languages = await resp.text();
//         const languageList = languages.split(";");
//         const langContainer = document.querySelector('#languageList');
//         languageList.forEach(lang => {
//             const li = document.createElement('li');
//             li.textContent = lang;
//             langContainer.appendChild(li);
//         })
//     }
        
    
// }
// getLang();


//Famous Paintings
// const getPaintDetails = async function() {

// }
