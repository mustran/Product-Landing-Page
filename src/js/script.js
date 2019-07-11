let detailsButton = document.querySelector("#searchButton");
let prod1 = document.querySelector("#prod1");

detailsButton.addEventListener('click', function () {
    prod1.classList.toggle("showDescription");
})
