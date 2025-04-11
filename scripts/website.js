// Current Year & Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Testimonials
const sliderDiv = document.querySelector(".slider");
if (sliderDiv) {
    const testimonials = [
        "“Loved the thrift finds! Always stylish.” – Maria G.",
        "“This helped me discover my style!” – Zoe R.",
        "“Combines classy & cool so well!” – Jade F."
    ];
    let index = 0;
    function showTestimonial() {
        sliderDiv.textContent = testimonials[index];
        index = (index + 1) % testimonials.length;
    }
    setInterval(showTestimonial, 3000);
    showTestimonial();
}

// Trend Reports
const container = document.querySelector(".features");
if (container) {
    const outfits = [
        { name: "Urban Casual", tag: "spring", img: "images/urban.jpg" },
        { name: "Bold Chic", tag: "summer", img: "images/bold.jpg" }
    ];
    outfits.forEach(outfit => {
        const div = document.createElement("div");
        div.className = "feature";
        div.innerHTML = `
        <h3>${outfit.name}</h3>
        <img src="${outfit.img}" alt="${outfit.name}" loading="lazy" />
        `;
        container.appendChild(div);
    });
}

// Style Gallery
const galleryContainer = document.getElementById("galleryContainer");
if (galleryContainer) {
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
        },
        {
             title: "Urban Wild",
            image: "images/outfit4.jpg",
             description: "A fierce combo of leopard-print and jacket brings instant edge to this street-smart look.  Confidence? Off the charts."
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
}

document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');

    const form = document.createElement('form');
    form.setAttribute('id', 'styleForm');

    // Clothing Types Question
    const clothingTypeLabel = document.createElement('label');
    clothingTypeLabel.setAttribute('for', 'clothingType');
    clothingTypeLabel.textContent = 'What types of clothing do you wear the most? (Select all that apply)';
    form.appendChild(clothingTypeLabel);

    const clothingFieldset = document.createElement('fieldset');
    const clothingTypes = ['Casual', 'Formal', 'Sporty', 'Boho Style', 'Modern', 'Other'];
    clothingTypes.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" name="clothingType" value="${type.toLowerCase()}"> ${type}`;
        clothingFieldset.appendChild(label);
    });
    form.appendChild(clothingFieldset);

    // Style Evaluation Question
    const styleRatingLabel = document.createElement('label');
    styleRatingLabel.setAttribute('for', 'styleRating');
    styleRatingLabel.textContent = 'How would you rate your personal style?';
    form.appendChild(styleRatingLabel);

    const styleRatingSelect = document.createElement('select');
    styleRatingSelect.setAttribute('id', 'styleRating');
    styleRatingSelect.setAttribute('name', 'styleRating');
    styleRatingSelect.required = true;
    const styleOptions = ['Comfortable', 'Elegant', 'Creative', 'Laid-back', 'Avant-garde'];
    styleOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase().replace(' ', '');
        optionElement.textContent = option;
        styleRatingSelect.appendChild(optionElement);
    });
    form.appendChild(styleRatingSelect);

    // Color Preferences
    const colorPreferenceLabel = document.createElement('label');
    colorPreferenceLabel.setAttribute('for', 'colorPreference');
    colorPreferenceLabel.textContent = 'What colors do you wear most often?';
    form.appendChild(colorPreferenceLabel);

    const colorPreferenceInput = document.createElement('input');
    colorPreferenceInput.setAttribute('type', 'text');
    colorPreferenceInput.setAttribute('id', 'colorPreference');
    colorPreferenceInput.setAttribute('name', 'colorPreference');
    colorPreferenceInput.setAttribute('placeholder', 'e.g., Black, White, Blue, etc.');
    colorPreferenceInput.required = true;
    form.appendChild(colorPreferenceInput);

    // Style Description
    const styleDescriptionLabel = document.createElement('label');
    styleDescriptionLabel.setAttribute('for', 'styleDescription');
    styleDescriptionLabel.textContent = 'Briefly describe how you would define your personal style:';
    form.appendChild(styleDescriptionLabel);

    const styleDescriptionTextarea = document.createElement('textarea');
    styleDescriptionTextarea.setAttribute('id', 'styleDescription');
    styleDescriptionTextarea.setAttribute('name', 'styleDescription');
    styleDescriptionTextarea.setAttribute('rows', '4');
    styleDescriptionTextarea.required = true;
    form.appendChild(styleDescriptionTextarea);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Append the form to the container
    formContainer.appendChild(form);
    // Append the form to the container
    formContainer.appendChild(form);

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show a popup message after submission
        alert("Thank you for your submission! We appreciate your collaboration in helping us improve our style insights.");

        // Optionally, reset the form after submission
        form.reset();
    })
})