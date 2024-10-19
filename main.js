let menuIcon = document.querySelector(".burger-menu");
let menu = document.querySelector(".menu");

menuIcon.addEventListener("click" , () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active")
    }
})