export default [
  {
    tag: 'input',
    props: {
      label: 'Логин',
      name: 'login',
      type: 'text',
      id: 'login-form-login',
      value:'fffff',
      classes: 'login-form__input',
      tagClasses: 'login-form__input-wrapper'
    }
  },
  {
    tag: 'input',
    props: {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      id: 'login-form-password',
      classes: 'login-form__input',
      tagClasses: 'login-form__input-wrapper login-form__input-space'
    }
  },
  {
    tag: 'input',
    props: {
      value: 'Авторизоваться',
      type: 'submit',
      classes: 'login-form__button',
      tagClasses: 'login-form__input-wrapper'
    }
  },
  {
    tag: 'link',
    props: {
      href: 'signup.html',
      label: 'Нет аккаунта?',
      classes: 'login-form__link'
    }
  },
];