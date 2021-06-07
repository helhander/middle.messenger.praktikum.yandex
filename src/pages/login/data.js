export default [
  {
    tag: 'input',
    attrs: {
      label: 'Логин',
      name: 'login',
      type: 'text',
      id: 'login-form-login',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      id: 'login-form-password',
      classes: 'login-form__input',
      divClasses: 'login-form__input-wrapper login-form__input-space'
    }
  },
  {
    tag: 'input',
    attrs: {
      value: 'Авторизоваться',
      type: 'submit',
      classes: 'login-form__button'
    }
  },
  {
    tag: 'link',
    attrs: {
      href: 'signin.html',
      label: 'Нет аккаунта?',
      classes: 'login-form__link'
    }
  },
];