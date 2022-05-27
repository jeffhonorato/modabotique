const menuMobile = document.querySelector(".menu__mobile");
const nav = document.querySelector(".nav__itens")

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("show")
})