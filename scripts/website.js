//shows current year//
document.getElementById("currentyear").textContent = new Date().getFullYear();

//last mod of the code//
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

/*FORM*/
<form id="signup-form">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Your e-mail" required />
    <button type="submit">Send</button>
</form>

/*TESTIM*/
const testimonials = [
    "“Loved the thrift finds! Always stylish.” – Maria G.",
    "“This helped me discover my style!” – Zoe R.",
    "“Combines classy & cool so well!” – Jade F."
];

const sliderDiv = document.querySelector(".slider");
let index = 0;

function showTestimonial() {
    sliderDiv.textContent = testimonials[index];
    index = (index + 1) % testimonials.length;
}
setInterval(showTestimonial, 3000);
showTestimonial();

const outfits = [
    { name: "Urban Casual", tag: "spring", img: "images/urban.jpg" },
    { name: "Bold Chic", tag: "summer", img: "images/bold.jpg" }
];

const container = document.querySelector(".features");

/*Trend Reports*/
outfits.forEach(outfit => {
    const div = document.createElement("div");
    div.className = "feature";
    div.innerHTML = `
    <h3>${outfit.name}</h3>
    <img src="${outfit.img}" alt="${outfit.name}" loading="lazy" />
  `;
    container.appendChild(div);
});


/*STYLE-GALLERY*/
document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("galleryContainer");

    const outfit = [
        {
            title: "Cozy Street Neutrals",
            image: "images/outfit1.jpg",
            description: "A comfy oversized jacket paired with high-waisted mom jeans and tennis shoes."
        },
        {
            title: "Vintage Pop",
            image: "images/outfit2.jpg",
            description: "Bright vintage windbreaker and thrifted denimoutf for retro vibes."
        },
        {
            title: "Layered Luxe",
            image: "images/outfit3.jpg",
            description: "Streetwear hoodie under a classic trench — comfy meets chic."
        }
    ];

    outfit.forEach(look => {
        const card = document.createElement("div");
        card.classList.add("outfit-card");

        card.innerHTML = `
            <h3>${look.title}</h3>
            <img src="${look.image}" alt="${look.title}" loading="lazy">
            <p>${look.description}</p>
        `;

        galleryContainer.appendChild(card);
    });
});



// Review Form
const form = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const outfit = document.querySelector("#outfit").value;

        const review = { name, outfit };
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        displayReviews();
        form.reset();
    });

    function displayReviews() {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviewList.innerHTML = reviews.map(r =>
            `<p><strong>${r.name}:</strong> ${r.outfit}</p>`
        ).join("");
    }

    displayReviews();
}
