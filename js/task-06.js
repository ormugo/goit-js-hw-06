const validationInput = document.getElementById('validation-input');
const inputValue = validationInput.value;

validationInput.addEventListener('blur', () => {
  const inputValue = validationInput.value;
  const dataLength = parseInt(validationInput.dataset.length);

  if (inputValue.length === dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
