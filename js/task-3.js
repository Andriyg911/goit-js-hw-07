// Отримуємо посилання на елементи
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо обробник події input
nameInput.addEventListener("input", () => {
  // Очищаємо значення від зайвих пробілів
  const trimmedValue = nameInput.value.trim();

  // Якщо інпут порожній або містить тільки пробіли, встановлюємо "Anonymous"
  nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymous";
});