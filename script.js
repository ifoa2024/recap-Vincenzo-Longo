// document.addEventListener("DOMContentLoaded", () => {
//   let dev = [
//     {
//       firstName: "Marco",
//       lastName: "M.",
//       country: "Switzerland",
//       continent: "Europe",
//       age: 19,
//       language: "JavaScript",
//     },
//     {
//       firstName: "Simone",
//       lastName: "S.",
//       country: "Tahiti",
//       continent: "Oceania",
//       age: 28,
//       language: "JavaScript",
//     },
//     {
//       firstName: "Matteo",
//       lastName: "L.",
//       country: "Taiwan",
//       continent: "Asia",
//       age: 35,
//       language: "HTML",
//     },
//     {
//       firstName: "Ettore",
//       lastName: "M.",
//       country: "Tajikistan",
//       continent: "Asia",
//       age: 30,
//       language: "CSS",
//     },
//   ];

//   let tbody = document.getElementById("tbody");
//   let regionSelect = document.getElementById("regionSelect");
//   let languageSelect = document.getElementById("languageSelect");

//   function generateTable(data) {
//     tbody.innerHTML = "";
//     data.forEach((element) => {
//       let trow = document.createElement("tr");
//       for (let key in element) {
//         let tcell = document.createElement("td");
//         tcell.textContent = element[key];
//         trow.appendChild(tcell);
//       }
//       tbody.appendChild(trow);
//     });
//   }

//   function getUniqueValues(list, key) {
//     return [...new Set(list.map((item) => item[key]))];
//   }

//   function populateDropdown(selectElement, options) {
//     options.forEach((option) => {
//       let opt = document.createElement("option");
//       opt.value = option;
//       opt.textContent = option;
//       selectElement.appendChild(opt);
//     });
//   }

//   populateDropdown(regionSelect, getUniqueValues(dev, "continent"));
//   populateDropdown(languageSelect, getUniqueValues(dev, "language"));

//   function filterData() {
//     let selectedRegion = regionSelect.value;
//     let selectedLanguage = languageSelect.value;

//     let filteredData = dev.filter((item) => {
//       return (
//         (selectedRegion === "all" || item.continent === selectedRegion) &&
//         (selectedLanguage === "all" || item.language === selectedLanguage)
//       );
//     });

//     generateTable(filteredData);
//   }

//   regionSelect.addEventListener("change", filterData);
//   languageSelect.addEventListener("change", filterData);

//   generateTable(dev);
// });

// //es 2

// document.addEventListener("DOMContentLoaded", () => {
//   function addGreeting(list) {
//     return list.map((item) => {
//       item.greeting = `Awe ${item.firstName}, io lavoro con ${item.language}, ma effettivamente è meglio javascript`;
//       return item;
//     });
//   }

//   let list = [
//     {
//       firstName: "Sofia",
//       lastName: "I.",
//       country: "Argentina",
//       continent: "Americas",
//       age: 35,
//       language: "Java",
//     },
//     {
//       firstName: "Lukas",
//       lastName: "X.",
//       country: "Croatia",
//       continent: "Europe",
//       age: 35,
//       language: "Python",
//     },
//     {
//       firstName: "Madison",
//       lastName: "U.",
//       country: "United States",
//       continent: "Americas",
//       age: 32,
//       language: "Ruby",
//     },
//   ];

//   let result = addGreeting(list);

//   const greetingList = document.getElementById("greetingList");

//   result.forEach((item) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = item.greeting;
//     listItem.classList.add(
//       "bg-white",
//       "p-4",
//       "rounded-lg",
//       "shadow-md",
//       "text-gray-800",
//       "border",
//       "border-gray-200"
//     );
//     greetingList.appendChild(listItem);
//   });
// });

// //es 3

// function hasGreenEyes(list) {
//   return list.filter((person) => person.eyes === "Green").length > 0;
// }

// let list = [
//   {
//     firstName: "Emma",
//     lastName: "Z.",
//     country: "Netherlands",
//     continent: "Europe",
//     age: 29,
//     eyes: "Brown",
//   },
//   {
//     firstName: "Piotr",
//     lastName: "B.",
//     country: "Poland",
//     continent: "Europe",
//     age: 128,
//     eyes: "Black",
//   },
//   {
//     firstName: "Jayden",
//     lastName: "P.",
//     country: "Jamaica",
//     continent: "Americas",
//     age: 42,
//     eyes: "Green",
//   },
// ];

// console.log(hasGreenEyes(list));

// //es 4
// document.addEventListener('DOMContentLoaded', () => {
//     const list = [
//         { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//         { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//         { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//     ];

//     const languageSelect = document.getElementById('languageSelect');
//     const searchBtn = document.getElementById('searchBtn');
//     const result = document.getElementById('result');

//     function findDeveloperByLanguage(language) {
//         if (language === 'all') {
//             return 'Tutti gli sviluppatori';
//         }

//         const developer = list.find(dev => dev.language === language);
//         if (developer) {
//             return `${developer.firstName}, ${developer.country}`;
//         } else {
//             return `Non ci sono sviluppatori ${language}`;
//         }
//     }

//     searchBtn.addEventListener('click', () => {
//         const selectedLanguage = languageSelect.value;
//         const developerInfo = findDeveloperByLanguage(selectedLanguage);
//         result.textContent = developerInfo;
//     });
// });


//es 5

// // function showUserStatus(users) {
// //     users.forEach(user => {
// //         if (user.logged) {
// //             alert(`L'utente ${user.firstName} ${user.lastName} è stato registrato.`);
// //         } else {
// //             alert(`L'utente ${user.firstName} ${user.lastName} non è registrato.`);
// //         }
// //     });
// // }

// // let list = [
// //     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
// //     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
// //     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
// // ];

// showUserStatus(list);

//es 6
// let name = prompt('Come ti chiami?');

// if (name) {
//     document.getElementById('userInput').innerText = `Ciao, ${name}!`;
// } else {
//     document.getElementById('userInput').innerText = "Non hai inserito il tuo nome.";
// }


//es 7
// let openingDays = [
//     { day: 'monday', from: '9.00', to: "18.00" },
//     { day: 'tuesday', from: '9.00', to: "18.00" },
//     { day: 'wednesday', from: '9.00', to: "18.00" },
//     { day: 'thursday', from: '9.00', to: "18.00" },
//     { day: 'friday', from: '9.00', to: "18.00" },
//     { day: 'saturday', from: '9.00', to: "18.00" },
//     { day: 'sunday', from: '9.00', to: "18.00" }
// ];

// function populateOpeningHours() {
//     const openingsList = document.getElementById('openings');
//     openingDays.forEach(day => {
//         const listItem = document.createElement('li');
//         const capitalizedDay = day.day.charAt(0).toUpperCase() + day.day.slice(1);
//         listItem.textContent = `${capitalizedDay} : dalle ${day.from} alle ${day.to}`;
//         openingsList.appendChild(listItem);
//     });
// }

// populateOpeningHours();

//es 8
// const title = document.getElementById('title');
// const button = document.getElementById('toggleButton');

// button.addEventListener('click', () => {
//     title.classList.toggle('text-red-500');
// });


//es 9
let list = [
    { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
    { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
    { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
    { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
    { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
    { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
    { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
];

const cardContainer = document.getElementById('cardContainer');

list.forEach(person => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow-md text-center';

    const flagIcon = document.createElement('i');
    flagIcon.className = `flag-icon flag-icon-${person.flag} text-4xl mx-auto mb-2`;

    const nameAge = document.createElement('h3');
    nameAge.className = 'text-lg font-bold mb-2';
    nameAge.textContent = `${person.firstName}, ${person.age}`;

    const language = document.createElement('p');
    language.className = 'text-sm text-gray-700 mb-1';
    language.textContent = `Skill: ${person.language}`;

    const country = document.createElement('p');
    country.className = 'text-sm text-gray-500';
    country.textContent = person.country;

    card.append(flagIcon, nameAge, language, country);
    cardContainer.appendChild(card);
});

//es 10
let navbar = document.getElementById('navbar');

document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if (scrolled > 50) {
        navbar.classList.remove('bg-transparent', 'py-4');
        navbar.classList.add('bg-gray-800', 'py-2');
    } else {
        navbar.classList.remove('bg-gray-800', 'py-2');
        navbar.classList.add('bg-transparent', 'py-4');
    }
});


//es 12
document.getElementById("calculate").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Inserisci numeri validi");
        return;
    }
    
    switch (operation) {
        case "sum":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                alert("Non è possibile dividere per 0");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Seleziona un'operazione");
            return;
    }
    
    console.log(result);  
    
    document.getElementById("result").textContent =  `Totale: ${result}`;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
});





