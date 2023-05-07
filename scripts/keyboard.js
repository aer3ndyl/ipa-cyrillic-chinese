function addToTextarea() {
    // Получаем содержимое textarea
    let textareaContent = document.querySelector("#input").value;
    
    // Получаем содержимое нажатой кнопки
    let buttonContent = this.textContent;
    
    // Добавляем содержимое кнопки к содержимому textarea
    textareaContent += buttonContent;
    
    // Обновляем содержимое textarea
    document.querySelector("#input").value = textareaContent;
  }
  
  // Получаем все кнопки на странице
  const buttons = document.querySelectorAll("button");
  
  // Добавляем обработчик событий "click" для каждой кнопки
  buttons.forEach(function(button) {
    button.addEventListener("click", addToTextarea);
  });
  