// Array of product objects
const products = [
    { id: "fc-1888", name: "Neutrogena Oil-Free Salicylic Acid Acne Fighting Face Wash" },
    { id: "fc-2050", name: "Tula The Cult Classic Purifying Face Cleanser" },
    { id: "fs-1987", name: "Norie Kimchii Cleanser" },
    { id: "fs-2187", name: "The Ordinary AHA 30% + BHA 2% Exfoliating Peeling Solution" },
    { id: "ac-2000", name: "Murad Vita-C Triple Exfoliating Facial" }
];

// Populate select options
const select = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

// Update year and last modified
document.addEventListener("DOMContentLoaded", function () {
    // Year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Last Modified date
    document.getElementById("lastModified").textContent = document.lastModified;

   
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
});
