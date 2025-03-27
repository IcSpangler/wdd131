// Function to update the footer with the current year and last modified date
function updateFooter() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
}

// Function to calculate wind chill based on temperature (°F) and wind speed (mph)
function calculateWindChill(temp, windSpeed) {
    return (temp <= 50 && windSpeed > 3)
        ? Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16))
        : "N/A";
}
// Function to display wind chill if conditions are met
function displayWindChill() {
    const temperature = 45; // Static temperature in °F (adjust as needed)
    const windSpeed = 10; // Static wind speed in mph (adjust as needed)
    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed) + " °F";
}


// Run functions when page loads
document.addEventListener("DOMContentLoaded", () => {
    let temp = 40; // Example temperature
    let windSpeed = 10; // Example wind speed
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});