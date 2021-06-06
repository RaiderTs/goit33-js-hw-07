const inputEl = document.querySelector("#validation-input");
//Сколько символов должно быть в инпуте
// преобразование к числу через унарный плюс
const maxLength = +inputEl.dataset.length;

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === maxLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
