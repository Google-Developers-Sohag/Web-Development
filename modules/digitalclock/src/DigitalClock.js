// Define a function to display the current time
function displayTime() {
    let clock = document.querySelector("#clock"); // Get element with id="clock"
    let now = new Date();
    // Get current time
    clock.textContent = now.toLocaleTimeString(); // Display time in the clock
}
displayTime()
// Display the time right away
setInterval(displayTime, 1000); // And then update it every second.