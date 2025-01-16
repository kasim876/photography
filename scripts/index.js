const burger = document.getElementById("burger");
const menu = document.getElementById("nav");

const menuActiveClass = "nav--active";
const burgerActiveClass = "burger--active";

function openMobileMenu() {
    menu.classList.toggle(menuActiveClass);
    burger.classList.toggle(burgerActiveClass);
}

burger.addEventListener("click", openMobileMenu);
