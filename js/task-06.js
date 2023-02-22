refs = {
  validationInput: document.querySelector("#validation-input"),
  lengthNumber: Number(input.dataset.length),
};
refs.validationInput.addEventListener("blur", checkLengthNumberFunction);

function checkLengthNumberFunction(event) {
  if (event.currentTarget.value.length === refs.lengthNumber) {
    refs.validationInput.classList.remove("invalid");
    refs.validationInput.classList.add("valid");
  } else {
    refs.validationInput.classList.remove("valid");
    refs.validationInput.classList.add("invalid");
  }
}
