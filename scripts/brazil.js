// Function to update the footer with the current year and last modified date
function updateFooter() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
}

// Function to calculate wind chill based on temperature (°F) and wind speed (mph)
function calculateWindChill(temp, windSpeed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

// Function to display wind chill if conditions are met
function displayWindChill() {
    const temperature = 45; // Static temperature in °F (adjust as needed)
    const windSpeed = 10; // Static wind speed in mph (adjust as needed)
    const windChillElement = document.getElementById("windChill");

    if (temperature <= 50 && windSpeed > 3) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Run functions when page loads
document.addEventListener("DOMContentLoaded", function () {
    updateFooter();
    displayWindChill();
});
