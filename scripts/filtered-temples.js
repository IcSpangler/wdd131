document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const templeContainer = document.getElementById("temples");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (!menuToggle || !navMenu || !templeContainer) {
        console.error("Error");
        return;
    }

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");
    });

    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Última atualização: " + document.lastModified;
    }

    const temples = [
        
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
            },
            {
                templeName: "Boise Idaho ",
                location: "Boise Idaho ",
                dedicated: "1987, February, 14",
                area: 35868,
                imageUrl:
                    "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-41667-main.jpg"
            },
            {
                templeName: "João Pessoa",
                location: "João Pessoa, Brasil",
                dedicated: "not yet",
                area: 18850,
                imageUrl:
                    "https://churchofjesuschristtemples.org/assets/img/temples/joao-pessoa-brazil-temple/joao-pessoa-brazil-temple-50370-main.jpg"
            },
            {
                templeName: "Kansas City Missiouri",
                location: "Kansas City, Missouri ",
                dedicated: "2012, May, 6",
                area: 32000,
                imageUrl:
                    "https://churchofjesuschristtemples.org/assets/img/temples/kansas-city-missouri-temple/kansas-city-missouri-temple-36983-main.jpg"
            },
        
    ];

    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = "";

        filteredTemples.forEach((temple) => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            templeContainer.appendChild(card);
        });
    }

    function filterTemples(filterType) {
        let filteredTemples = [];

        if (filterType === "old") {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filterType === "new") {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (filterType === "large") {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filterType === "small") {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        } else {
            filteredTemples = temples; // Mostra todos os templos no modo "Home"
        }

        displayTemples(filteredTemples);
    }

    // Exibir todos os templos ao carregar a página
    displayTemples(temples);

    // Adicionar evento aos botões para filtrar templos
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = button.getAttribute("data-filter");
            filterTemples(filter);
        });
    });
});
