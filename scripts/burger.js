const burger = document.getElementById("burger");
const menu = document.getElementById("nav");

const menuActiveClass = "nav--active";
const burgerActiveClass = "burger--active";

function toggleNavMenu() {
    burger.classList.toggle(burgerActiveClass);
    menu.classList.toggle(menuActiveClass);
}

burger.addEventListener("click", toggleNavMenu);