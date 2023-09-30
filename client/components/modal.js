import { userData } from "../app.js";
import utils from "../utils.js";

// Get the modal and button elements
const modal = document.getElementById("userDetailsModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModal");
const userDetailsButton = document.getElementById("user-details-button");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when the user clicks anywhere outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Submit the user details form (you can add your own logic for handling the form submission)
userDetailsButton.addEventListener("click", (event) => {
  const username = document.querySelector("#userDetailsForm .chat-input").value;
  utils.setUserData.bind(userData)({ userName: username });
  modal.style.display = "none";
});
