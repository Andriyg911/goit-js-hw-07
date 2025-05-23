// Отримуємо посилання на форму
const loginForm = document.querySelector(".форма-входу");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  // Отримуємо введені дані, очищаючи їх від зайвих пробілів
  const email = loginForm.elements["електронна пошта"].value.trim();
  const password = loginForm.elements["пароль"].value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт із даними
  const formData = {
    email,
    password
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищуємо форму
  loginForm.reset();
});
// Функція генерації випадкового HEX-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Отримуємо елементи
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Додаємо обробник події на кнопку
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); // Генеруємо новий колір

  document.body.style.backgroundColor = randomColor; // Змінюємо фон <body>
  colorSpan.textContent = randomColor; // Відображаємо значення кольору в <span>
});