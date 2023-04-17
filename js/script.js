let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");
let film = document.querySelector(".js-film");
let usunFilm = document.querySelector(".js-usunFilm");


button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

usunFilm.addEventListener("click", () => {
    film.remove();
});