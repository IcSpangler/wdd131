document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!menuToggle || !navMenu) {
        console.error("Erro: Elementos do menu não encontrados.");
        return;
    }

    // Alterna a visibilidade do menu ao clicar no botão
    menuToggle.addEventListener("click", function () {
        console.log("Botão do menu clicado!");
        navMenu.classList.toggle("show-menu");
    });

    // Atualiza o ano no rodapé
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Atualiza a data de última modificação
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Última atualização: " + document.lastModified;
    }
});
