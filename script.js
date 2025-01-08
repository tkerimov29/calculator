const display = document.getElementById('display');

// Clear the display
function clearDisplay() {
display.value = '';
}

// Append a value to the display
function appendToDisplay(value) {
display.value += value;
}

// Toggle the sign of the number
function toggleSign() {
if (display.value) {
    display.value = display.value.startsWith('-')
    ? display.value.slice(1)
    : '-' + display.value;
}
}

// Calculate the result
function calculateResult() {
try {
    display.value = eval(display.value); // Use eval carefully!
} catch (error) {
    alert('Invalid expression');
}
}