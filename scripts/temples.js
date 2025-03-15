document.addEventListener("DOMContentLoaded", () => {
    // Update footer year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Hamburger menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        menuToggle.textContent = navMenu.classList.contains("show-menu") ? "✖" : "☰";
    });
});
