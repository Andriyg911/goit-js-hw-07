
// Отримуємо елементи інпуту та спану
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо слухач події input
nameInput.addEventListener("input", () => {
  // Очищуємо значення від пробілів на початку та в кінці
  const trimmedValue = nameInput.value.trim();
  
  // Перевіряємо, чи інпут порожній або містить лише пробіли
  nameOutput.textContent = trimmedValue ? trimmedValue : "Анонім";
});