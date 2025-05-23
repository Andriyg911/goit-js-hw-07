// Отримуємо посилання на форму
const loginForm = document.querySelector(".форма-входу");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  // Отримуємо значення полів
  const email = loginForm.elements["електронна пошта"].value.trim();
  const password = loginForm.elements["пароль"].value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  // Формуємо об'єкт з даними користувача
  const userData = {
    "електронна пошта": email,
    "пароль": password
  };

  console.log(userData); // Виводимо в консоль

  loginForm.reset(); // Очищаємо форму
});