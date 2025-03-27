// Function to update the footer with the current year and last modified date
function updateFooter() {
    console.log("Updating footer...");
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    if (currentYearElement && lastModifiedElement) {
        currentYearElement.textContent = new Date().getFullYear();
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    } else {
        console.log("Error: Footer elements not found.");
    }
}

// Function to calculate wind chill based on temperature (°F) and wind speed (mph)
function calculateWindChill(temp, windSpeed) {
    console.log(`Calculating wind chill for temp: ${temp}, windSpeed: ${windSpeed}`);
    return (temp <= 50 && windSpeed > 3)
        ? Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16))
        : "N/A";
}

// Function to display wind chill if conditions are met
function displayWindChill() {
    console.log("Displaying wind chill...");
    const temperature = 45; // Static temperature in °F (adjust as needed)
    const windSpeed = 10; // Static wind speed in mph (adjust as needed)

    const windChillElement = document.getElementById("windChill");
    if (windChillElement) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °F";
    } else {
        console.log("Error: Wind chill element not found.");
    }
}

// Run functions when page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, running functions...");
    updateFooter();  // Update footer with current year and last modified date
    displayWindChill();  // Display the wind chill on page load
});
