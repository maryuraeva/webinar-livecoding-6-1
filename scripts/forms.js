const form = document.querySelector(".popup__form");
const nameInput = form.querySelector("#user-name");
const aboutInput = form.querySelector("#about");
const emailInput = form.querySelector("#email");
const phoneInput = form.querySelector("#phone");
const passwordInput = form.querySelector("#password");
const passwordRepeatInput = form.querySelector("#password-repeat");
const submitButton = form.querySelector(".button");

const setSubmitButtonState = (isActive) => {
  if (isActive) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.add("popup__button_valid");
    submitButton.classList.remove("popup__button_invalid");
  } else {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("popup__button_invalid");
    submitButton.classList.remove("popup__button_valid");
  }
};

const validatePasswords = () => {
  const passwordErrorElement = form.querySelector(`#${passwordInput.id}-error`);
  const passwordRepeatErrorElement = form.querySelector(
    `#${passwordRepeatInput.id}-error`
  );
  if (passwordInput.value == passwordRepeatInput.value) {
    passwordInput.setCustomValidity("");
    passwordRepeatInput.setCustomValidity("");
    passwordErrorElement.textContent = "";
    passwordRepeatErrorElement.textContent = "";
  } else {
    passwordInput.setCustomValidity("Пароли не равны");
    passwordRepeatInput.setCustomValidity("Пароли не равны");
    passwordErrorElement.textContent = passwordInput.validationMessage;
    passwordRepeatErrorElement.textContent =
      passwordRepeatInput.validationMessage;
  }
};

const validateGeneralInput = (inputElement) => {
  const errorElement = form.querySelector(`#${inputElement.id}-error`);
  if (inputElement.checkValidity()) {
    errorElement.textContent = "";
  } else {
    errorElement.textContent = inputElement.validationMessage;
  }
};

const validateInput = (inputElement) => {
  if (inputElement == passwordInput || inputElement == passwordRepeatInput) {
    validatePasswords();
  } else {
    validateGeneralInput(inputElement);
  }

  if (form.checkValidity()) {
    setSubmitButtonState(true);
  } else {
    setSubmitButtonState(false);
  }
};

const validateForm = (event) => {
  event.preventDefault();

  validateInput(nameInput);
  validateInput(aboutInput);
  validateInput(emailInput);
  validateInput(phoneInput);
  validateInput(passwordInput);
  validateInput(passwordRepeatInput);

  if (form.checkValidity()) {
    form.reset();
  } else {
  }
};

const validateFormOnPress = (event) => {
  validateInput(event.target);
};

form.addEventListener("submit", validateForm);
form.addEventListener("input", validateFormOnPress);
