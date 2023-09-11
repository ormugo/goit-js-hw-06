const validationInput = document.getElementById('validation-input');
const inputValue = validationInput.value;

validationInput.addEventListener('blur', () => {
  const dataLength = parseInt(validationInput.getAttribute('data-length'));

  if (inputValue.length === dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
