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


// Famous Paintings
// const getPaintDetails = async function() {
//     const table = document.querySelector('#paintings');
//     const resp = await fetch("./paintings.json");
//     const paintData = await resp.json();
//     paintData.forEach(paint => {
//         const tr = document.createElement('tr');
//         const td1 = document.createElement('td');
//         td1.textContent = paint.name;
//         const td2 = document.createElement('td');
//         td2.textContent = paint.year;
//         const td3 = document.createElement('td');
//         td3.textContent = paint.name;
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         table.appendChild(tr)
//     })
// }

// getPaintDetails();
