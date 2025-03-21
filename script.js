// Save and retrieve user preferences
function savePreference(theme) {
  localStorage.setItem("theme", theme);
  console.log(`Theme preference saved: ${theme}`);
}

function getPreference() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    console.log(`Retrieved theme preference: ${theme}`);
    applyTheme(theme);
  } else {
    console.log("No theme preference found.");
  }
}

function applyTheme(theme) {
  document.body.className = theme;
}

// Example: Save and retrieve a theme preference
savePreference("dark-theme"); // Save a preference
getPreference(); // Retrieve and apply the preference

// Trigger animation on button click
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.add("animate");
});

button.addEventListener("animationend", () => {
  button.classList.remove("animate");
});
