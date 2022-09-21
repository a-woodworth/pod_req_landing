const requestAccessForm = document.querySelector('.form__container');
const emailInput = document.querySelector('.form__input');
const errorMessage = document.querySelector('.form__error-message');

function validateForm(e) {
  const validEmail = emailInput.checkValidity();

  if (!validEmail) {
    // Form is invalid - cancel submit and show error message
    e.preventDefault();
    errorMessage.classList.remove('not-visible');
    errorMessage.classList.add('visible');

    // Update aria-invalid attribute
    emailInput.setAttribute('aria-invalid', true);

    // Send focus to email input
    emailInput.focus();
  }
}

requestAccessForm.addEventListener('submit', validateForm);
