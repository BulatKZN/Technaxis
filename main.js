const burger = document.querySelector(".header-menu-burger");

const menu = document.querySelector('.menu');


burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        burger.classList.remove("active");
        menu.classList.remove("active");
    }else {
        burger.classList.add("active");
        menu.classList.add("active");
    }
});