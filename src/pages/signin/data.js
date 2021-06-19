export default [
  {
    tagName: 'input',
    tag: 'input',
    props: {
      label: 'Логин',
      name: 'login',
      type: 'text',
      id: 'login-form-login',
      value:'fffff',
      classes: 'login-form__input'
    }
  },
  {
    tagName: 'input',
    tag: 'input',
    props: {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      id: 'login-form-password',
      classes: 'login-form__input',
      divClasses: 'login-form__input-wrapper login-form__input-space'
    }
  },
  {
    tagName: 'input',
    tag: 'input',
    props: {
      value: 'Авторизоваться',
      type: 'submit',
      classes: 'login-form__button'
    }
  },
  {
    tag: 'link',
    tagName: 'link',
    props: {
      href: 'signup.html',
      label: 'Нет аккаунта?',
      classes: 'login-form__link'
    }
  },
];