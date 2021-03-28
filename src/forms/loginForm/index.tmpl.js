export default `
form(action="" method="post")
  div(class="field-input")
    label(for="login-login") Логин
    input(type="text" name="login" id="login-login")
  div(class="field-input")
    label(for="login-password") Пароль
    input(type="password" name="password" id="login-password")
  input(class="login-button" type="submit" value="Авторизоваться")
  a(class="button-link" href="http://ya.ru") Нет аккаунта?
  `;