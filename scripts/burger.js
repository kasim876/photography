(function() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("nav");

    const menuActiveClass = "nav--active";
    const burgerActiveClass = "burger--active";
    const lockScrollClass = "stop-scroll";

    function toggleNavMenu() {
        burger.classList.toggle(burgerActiveClass);
        menu.classList.toggle(menuActiveClass);
        document.body.classList.toggle(lockScrollClass);
    }

    burger.addEventListener("click", toggleNavMenu);
})()