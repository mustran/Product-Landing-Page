let detailsButton1 = document.querySelector("#searchButton1");
let detailsButton2 = document.querySelector("#searchButton2");
let detailsButton3 = document.querySelector("#searchButton3");

let prod1 = document.querySelector("#prod1");
let prod2 = document.querySelector("#prod2");
let prod3 = document.querySelector("#prod3");

detailsButton1.addEventListener('click', function () {
    prod1.classList.toggle("showDescription");
})

detailsButton2.addEventListener('click', function () {
    // console.log("CLICKED");
    prod2.classList.toggle("showDescription");
})

detailsButton3.addEventListener('click', function () {
    prod3.classList.toggle("showDescription");
})

// let showHide = document.querySelectorAll(".show");
// console.log(showHide);

// showHide.forEach(element => {
//     element.addEventListener('click', function(){
//         element.classList.toggle("showDescription");
//     })
// });