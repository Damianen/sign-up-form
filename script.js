const errorText = document.querySelector(".error-text");
const password = document.querySelector("#user_password");
const cPassword = document.querySelector("#c_password");

cPassword.addEventListener("input", () => {
    if (password.value != cPassword.value) {
        password.setCustomValidity("Invalid");
        cPassword.setCustomValidity("Invalid");
        errorText.textContent = "* Passwords do not match";
    }
    else {
        password.setCustomValidity("");
        cPassword.setCustomValidity("");
        errorText.textContent = "";
    }
});