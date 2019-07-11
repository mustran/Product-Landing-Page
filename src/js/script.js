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

let videoButton1 = document.querySelector("#videoButton1");
videoButton1.addEventListener('click', function(){
    console.log("CLICKED");
    prod1.classList.toggle("showVideo");
})

let videoButton2 = document.querySelector("#videoButton2");
videoButton2.addEventListener('click', function(){
    console.log("CLICKED");
    prod2.classList.toggle("showVideo");
})

let videoButton3 = document.querySelector("#videoButton3");
videoButton3.addEventListener('click', function(){
    console.log("CLICKED");
    prod3.classList.toggle("showVideo");
})

// let showHide = document.querySelectorAll(".show");
// console.log(showHide);

// showHide.forEach(element => {
//     element.addEventListener('click', function(){
//         element.classList.toggle("showDescription");
//     })
// });