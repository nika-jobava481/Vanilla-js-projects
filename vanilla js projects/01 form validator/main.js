// "use strict";
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function checkEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid.");
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
    showError(input, `${input.name} length must be ${min} to ${max}.`);
  } else {
    showSuccess(input);
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.name} is required.`);
    } else {
      showSuccess(input);
    }
  });
}

function checkPassMatch(inp1, inp2) {
  if (inp1.value !== imp2.value) {
    showError(inp2, "Passwords don't match");
  }
}

// EventListeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 4, 16);
  checkLength(password, 8, 32);
  checkEmail(email);
  checkPassMatch(password, confirmPassword);
});
