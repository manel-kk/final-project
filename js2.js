//javascript for input fields
document.addEventListener('DOMContentLoaded', () => {
  // Function for Name Input
  const nameInput = document.querySelector("#name");
  const nameLog = document.getElementById("name");
  const nameErrorMessage = document.getElementById("name-error");

  nameInput.addEventListener("input", updateNameValue);

  function updateNameValue(e) {
    const userInput = e.target.value;

    if (/[\d!@#$%^&*()_+{}\[\]:;<>,.?\/\\|]/.test(userInput)) {
      nameErrorMessage.textContent = "Error: Numbers or symbols are not allowed.";
      nameLog.textContent = "";
    } else {
      nameErrorMessage.textContent = "";
      nameLog.textContent = userInput;
    }
  }

  // Function for Email Input
  const emailInput = document.querySelector("#email");
  const emailLog = document.getElementById("email");
  const emailErrorMessage = document.getElementById("email-error");

  emailInput.addEventListener("input", updateEmailValue);

  function updateEmailValue(e) {
    const userInput = e.target.value;

    if (!isValidEmail(userInput)) {
      emailErrorMessage.textContent = "Error: Please enter a valid email format (string@string).";
      emailLog.textContent = "";
    } else {
      emailErrorMessage.textContent = "";
      emailLog.textContent = userInput;
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Function for Password Input
  const passwordInput = document.querySelector("#password");
  const passwordLog = document.getElementById("password");
  const passwordErrorMessage = document.getElementById("password-error");

  passwordInput.addEventListener("input", updatePasswordValue);

  function updatePasswordValue(e) {
    const userInput = e.target.value;

    if (!isValidPassword(userInput)) {
      passwordErrorMessage.textContent = "Error: password must be 6 characters and contain one symbol.";
      passwordLog.textContent = "";
    } else {
      passwordErrorMessage.textContent = "";
      passwordLog.textContent = userInput;
    }
  }

  function isValidPassword(password) {
    const symbolPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?\/\\|<>]/;
    const minlength = 6;
    return password.length >= minlength && symbolPattern.test(password);
  }
});
