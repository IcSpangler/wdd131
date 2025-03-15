document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");
    });

    // Set current year dynamically
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
});
