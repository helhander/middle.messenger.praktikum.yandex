export default `
div(class="content-wrapper")
  div(class="login-form-wrapper")
    h1(class="form-header") Вход
    form(class="login-form" action="" method="post")
      div(class="login-form-input-wrapper")
        label(class="login-form-input-label" for="login-login") Логин
        input(class="login-form-input" type="text" name="login" id="login-login")
      div(class="login-form-input-wrapper login-form-input-last")
        label(class="login-form-input-label" for="login-password") Пароль
        input(class="login-form-input" type="password" name="password" id="login-password")
      div(class="login-form-input-wrapper")
        input(class="login-form-button" type="submit" value="Авторизоваться")
      a(class="login-form-link" href="signin") Нет аккаунта?
  `;