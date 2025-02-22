// script.js

function displayGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello! Ready to find your next car rental?";
  if (hour < 12) {
    greeting = "Good morning! Ready to explore today?";
  } else if (hour < 18) {
    greeting = "Good afternoon! Where are you headed?";
  } else {
    greeting = "Good evening! Planning a trip?";
  }

  // Correctly target the element by ID
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greeting; // No more "null" error
}

// Rest of your code...