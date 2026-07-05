const form = document.getElementById("subscribeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function showError(input, message) {
    removeError(input);

    const error = document.createElement("small");
    error.className = "error-message";
    error.textContent = message;

    input.classList.add("error");
    input.parentElement.appendChild(error);
}

function removeError(input) {
    input.classList.remove("error");
    const error = input.parentElement.querySelector(".error-message");
    if (error) error.remove();
}

function validateName() {
    const value = nameInput.value.trim();

    if (value === "") {
        showError(nameInput, "Name is required");
        return false;
    }

    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();

    if (value === "") {
        showError(emailInput, "Email is required");
        return false;
    }

    return true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();

    console.log("SUBMIT BLOCKED CHECK:", nameValid, emailValid);

    if (!nameValid || !emailValid) return;

    alert("Success!");
    form.reset();
});