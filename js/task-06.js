const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.dataset.length);
  if (input.value.length === expectedLength) {
    input.setAttribute("class", "valid");
    return;
  }
  input.setAttribute("class", "invalid");
});
