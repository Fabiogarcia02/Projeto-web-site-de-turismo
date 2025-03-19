document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menuToggle");
    let menuLinks = document.querySelectorAll(".menu a, .menu-icon");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.checked = false; // Fecha o menu
        });
    });
});