const burger = document.getElementById("burger");
const menu = document.getElementById("nav");
const btn = document.getElementById("btn");
const modal = document.getElementById("modal");

const menuActiveClass = "nav--active";
const burgerActiveClass = "burger--active";
const modalActiveClass = "modal-wrapper--active";

function openMobileMenu() {
    menu.classList.toggle(menuActiveClass);
    burger.classList.toggle(burgerActiveClass);
}

function openModal() {
    modal.classList.add(modalActiveClass);
}

function closeModal(event) {
    if (event.target === modal) {
        modal.classList.remove(modalActiveClass);
    }
}

burger.addEventListener("click", openMobileMenu);
btn.addEventListener("click", openModal);
modal.addEventListener("click", closeModal)
