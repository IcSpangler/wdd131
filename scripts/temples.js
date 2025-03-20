document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!menuToggle || !navMenu) {
        console.error("Erro: Elementos do menu não encontrados.");
        return;
    }

    menuToggle.addEventListener("click", function () {
        console.log("Botão do menu clicado!"); // Depuração
        navMenu.classList.toggle("show-menu");
    });

    // Atualizar ano automaticamente
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Atualizar última modificação
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Última atualização: " + document.lastModified;
    }
});
