const requestAccessForm = document.querySelector('.form__container');
const emailInput = document.querySelector('.form__input');
const errorMessage = document.querySelector('.form__error-message');

function showErrorMessage() {
  if (emailInput.value === '') {
    errorMessage.innerText = `Oops! Please add your email`;
  } else {
    errorMessage.innerText = `Oops! Please check your email`;
  }
  
  errorMessage.classList.remove('not-visible');
  errorMessage.classList.add('visible');

  // Update aria-invalid attribute
  emailInput.setAttribute('aria-invalid', true);
}

function validateForm(e) {
  const validEmail = emailInput.checkValidity();

  if (!validEmail) {
    // Form is invalid - cancel submit and show error message
    e.preventDefault();
    showErrorMessage();

    // Send focus to email input
    emailInput.focus();
  }
}

requestAccessForm.addEventListener('submit', validateForm);
