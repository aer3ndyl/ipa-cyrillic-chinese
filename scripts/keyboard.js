// Функция, добавляющая символы кнопок в текстовое поле #input
function addToTextarea() {
  let textareaContent = document.querySelector("#input").value;
  let buttonContent = this.textContent;
  textareaContent += buttonContent;
  document.querySelector("#input").value = textareaContent;
}

// Привязка функции к каждой кнопке
const buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
  button.addEventListener("click", addToTextarea);
});
