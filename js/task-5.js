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